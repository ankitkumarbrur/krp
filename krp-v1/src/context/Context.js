import React from "react";

const appContext = React.createContext();

const ContextProvider = ({ children }) => {
  return <appContext.Provider value={""}>{children}</appContext.Provider>;
};

export { ContextProvider, appContext };
