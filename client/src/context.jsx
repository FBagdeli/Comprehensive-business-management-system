import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const URL = "http://localhost:3000";

export const AppProvider = ({ children }) => {
  const [mainContent, setMainContent] = useState([]);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await fetch(`${URL}/persons`);
        const personsData = await response.json();
        setPersons(personsData.data);
      } catch (error) {
        console.error("Error Fetching persons: ", error);
      }
    };

    fetchCustomer();
  }, []);

  const customerHandler = async () => {
    setMainContent(persons);
  };

  const productHandler = async () => {
    // setMainContent("Product");
  };

  const value = { mainContent, productHandler, customerHandler };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
