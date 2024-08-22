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
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${URL}/products`);
        const productsData = await response.json();
        setProducts(productsData.data);
      } catch (error) {
        console.error("Error Fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);

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
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
