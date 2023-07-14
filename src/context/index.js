import React, { createContext, useEffect, useState } from "react";
import {  LOGIN_DATA } from "../constants";

// Create a new context
const MyContext = createContext();

// Create a provider component
const MyContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pets, setPets] = useState([]);

  //get initial datas
  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem(LOGIN_DATA));
    if(loginData){
        setIsLoggedIn(true)
        setEmail(loginData)
    }

  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      const storedPets = localStorage.getItem(email);
      if (storedPets) {
        setPets(JSON.parse(storedPets));
      }
    }
  }, [isLoggedIn]);

  // Provide the context values to the children components
  return (
    <MyContext.Provider
      value={{ email, setEmail, isLoggedIn, setIsLoggedIn, pets, setPets }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
