import { createContext, useEffect, useState } from "react";
export const AppContext = createContext();
import { useNavigate } from "react-router-dom";
const URL = "http://localhost:3000";

export const AppProvider = ({ children }) => {
  const nav = useNavigate();
  const [customerContent, setCustomerContent] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [supplierContent, setSupplierContent] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [selectedContent, setSelectedContent] = useState("dashboard");
  const [productsContent, setProductsContent] = useState([]);
  const [products, setProducts] = useState([]);
  const [productContent, setProductContent] = useState([]);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await fetch(`${URL}/persons/customers`);
        const customersData = await response.json();
        setCustomers(customersData.data);
      } catch (error) {
        console.error("Error Fetching customers: ", error);
      }
    };
    fetchCustomer();
  }, []);

  useEffect(() => {
    const fetchSupplier = async () => {
      try {
        const response = await fetch(`${URL}/persons/suppliers`);
        const suppliersData = await response.json();
        setSuppliers(suppliersData.data);
      } catch (error) {
        console.error("Error Fetching suppliers: ", error);
      }
    };
    fetchSupplier();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${URL}/products`);
      const { data } = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching products: ", error);
    }
  };

  const productHandler = async (productId) => {
    const response = await fetch(`${URL}/products/${productId}`);
    const { data } = await response.json();
    nav(`/products/${productId}`);
    setProductContent(data.product);
  };
  const dashboardHandler = async () => {
    setSelectedContent("dashboard");
  };

  const productsHandler = async () => {
    setSelectedContent("products");
    setProductsContent(products);
  };

  const customerHandler = async () => {
    setSelectedContent("customers");
    setCustomerContent(customers);
  };

  const supplierHandler = async () => {
    setSelectedContent("suppliers");
    setSupplierContent(suppliers);
  };

  const navPrudctHandlerComponent = async () => {
    nav("/products/create");
  };

  const createNewProductSubmitHandler = async (newProduct) => {
    try {
      const response = await fetch(`${URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      await fetchProducts();
      const data = await response.json();

      // nav("/products");
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const createNewInvoiceSubmitHandler = async (newInvoice) => {
    const invoiceWithDateTimeZone = {...newInvoice, date: `${newInvoice.date}T00:00:00Z`}
    try {
      const response = await fetch(`${URL}/invoices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(invoiceWithDateTimeZone),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      console.log('created invoice: ', data)
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const value = {
    selectedContent,
    customerContent,
    supplierContent,
    productsContent,
    productContent,
    productsHandler,
    customerHandler,
    supplierHandler,
    dashboardHandler,
    productHandler,
    navPrudctHandlerComponent,
    createNewProductSubmitHandler,
    createNewInvoiceSubmitHandler,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
