import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [selectedRow, selectRow] = useState({});
  return (
    <Context.Provider value={[selectedRow, selectRow]}>
      {children}
    </Context.Provider>
  );
};

export default Context;
