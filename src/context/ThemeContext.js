
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(previous => !previous);
  };

  const theme = {
    isDarkMode,
    colors: isDarkMode
      ? {
          background: '#121212',
          card: '#1E1E1E',
          text: '#FFFFFF',
          secondaryText: '#BBBBBB',
          primary: '#7650D5',
          border: '#333333',
        }
      : {
          background: '#F7F5FA',
          card: '#FFFFFF',
          text: '#202A50',
          secondaryText: '#777481',
          primary: '#5942B8',
          border: '#E5E5E5',
        },
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
