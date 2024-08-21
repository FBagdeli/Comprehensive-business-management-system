import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const URL = "http://localhost:3000";

export const AppProvider = ({ children }) => {
  const [customerContent, setCustomerContent] = useState([]);
  const [customers, setCustomers] = useState([]);

  const [supplierContent, setSupplierContent] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await fetch(`${URL}/persons/customers`);
        const customersData = await response.json();
        console.log(customersData)
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
        console.log('fetch')
        const response = await fetch(`${URL}/persons/suppliers`);
        const suppliersData = await response.json();
        console.log(suppliersData)
        setSuppliers(suppliersData.data);
      } catch (error) {
        console.error("Error Fetching suppliers: ", error);
      }
    };
    fetchSupplier();
  }, []);

  const customerHandler = async () => {
    console.log("cusHandler");
    setCustomerContent(customers);
  };

  const productHandler = async () => {
    // setMainContent("Product");
  };

  const supplierHandler = async () => {
    setSupplierContent(suppliers);
  };

  const value = {
    customerContent,
    supplierContent,
    productHandler,
    customerHandler,
    supplierHandler,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
