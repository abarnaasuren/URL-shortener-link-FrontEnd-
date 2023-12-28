// get token from login and set in global context 
// or set token in local storage 

import { createContext, useState, useContext } from "react";

const NameContext = createContext(); //1

const NameProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({fname:"", lname:"", email:"", id:""});
  const [isLogged, setIsLogged] = useState(false) 
  const serverURL = "https://url-shortener-link-backend-szqw.onrender.com";
   //const serverURL = "http://localhost:8090";

  return (
    // second step
    <NameContext.Provider 
      value={{ currentUser, setCurrentUser, isLogged, setIsLogged, serverURL }}
    >
      {children}
    </NameContext.Provider>
  );
};

 const useGlobalContext = () => {
    return useContext(NameContext);
  };
  
  export { NameContext, NameProvider, useGlobalContext };
