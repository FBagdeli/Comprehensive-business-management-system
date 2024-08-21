import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const URL = "http://localhost:3000";

export const AppProvider = ({ children }) => {
  const [customerContent, setCustomerContent] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [supplierContent, setSupplierContent] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [selectedContent, setSelectedContent] = useState('dashboard')

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

  const dashboardHandler = async () => {
    setSelectedContent('dashboard')
  }

  const productHandler = async () => {
    setSelectedContent("products");
  };

  const customerHandler = async () => {
    setSelectedContent('customers')
    setCustomerContent(customers);
  };

  const supplierHandler = async () => {
    setSelectedContent('suppliers')
    setSupplierContent(suppliers);
  };

  

  const value = {
    selectedContent,
    customerContent,
    supplierContent,
    productHandler,
    customerHandler,
    supplierHandler,
    dashboardHandler,
    
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
