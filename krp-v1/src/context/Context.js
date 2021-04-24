import React, { useState, useEffect } from "react";
import data from "./mockData/data";

const appContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [review, setReview] = useState(data);

  return (
    <appContext.Provider value={{ review }}>{children}</appContext.Provider>
  );
};

export { ContextProvider, appContext };
