import { createContext, useContext, useState } from 'react';

// Create Theme Context 
export const ThemeContext = createContext();

// Create Reusable Custom Context Consumption Hook
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("day");
  return (
    <ThemeContext.Provider
      value={{
        themeName,
        setThemeName
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
