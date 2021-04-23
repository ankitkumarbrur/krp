import React, { useState, useEffect } from "react";

const appContext = React.createContext();

const ContextProvider = ({ children }) => {
  return <appContext.Provider value={"hello"}>{children}</appContext.Provider>;
};

export { ContextProvider, appContext };
