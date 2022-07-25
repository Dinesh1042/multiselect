import { createContext, useContext, useState } from "react";

const OptionsContext = createContext({
  selectedOptions: [],
  setSelectedOptions() {},
});

export const useOptionContext = () => useContext(OptionsContext);

export const OptionsProvider = ({ children }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <OptionsContext.Provider value={{ selectedOptions, setSelectedOptions }}>
      {children}
    </OptionsContext.Provider>
  );
};
