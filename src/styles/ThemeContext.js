import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const ThemeToggleContext = createContext();

export const useTheme = () => useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({
    mode: 'light',
  });

  const toggle = () => {
    const mode = themeState.mode === 'light' ? 'dark' : 'light';
    setThemeState({ mode });
  };

  return (
    <ThemeToggleContext.Provider value={{ toggle }}>
      <ThemeProvider theme={themeState}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

MyThemeProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
