import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const URL = "http://localhost:3000";

export const AppProvider = ({ children }) => {
  const [customerContent, setCustomerContent] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [supplierContent, setSupplierContent] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [selectedContent, setSelectedContent] = useState('Dashboard')

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

  const customerHandler = async () => {
    setSelectedContent('customers')
    setCustomerContent(customers);
  };

  const productHandler = async () => {
    // setMainContent("Product");
  };

  const supplierHandler = async () => {
    setSelectedContent('suppliers')
    setSupplierContent(suppliers);
  };

  const value = {
    customerContent,
    supplierContent,
    productHandler,
    customerHandler,
    supplierHandler,
    selectedContent,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
