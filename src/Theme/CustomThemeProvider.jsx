import React, { createContext, useState, useContext } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Create a provider component
export const CustomThemeProvider = ({ children }) => {

  const savedTheme = localStorage.getItem('appTheme');

  const N_savedTheme = savedTheme ? savedTheme :  'isn';

  const [theme, setTheme] =  useState(N_savedTheme);// Default theme
  console.log("saved theme" ,savedTheme);
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.clear();
    localStorage.setItem('appTheme', newTheme);
    console.log(newTheme)
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
