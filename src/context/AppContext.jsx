/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// Crear el contexto
export const AppContext = createContext();

// Proveedor del contexto
const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("");

  return (
    <AppContext.Provider
      value={{
        cocktails,
        setCocktails,
        categories,
        setCategories,
        filter,
        setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
