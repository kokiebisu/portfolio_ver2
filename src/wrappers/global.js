import React from 'react';
import { ThemeProvider } from 'styled-components';

// Context
import { useGlobalStateContext } from '../context/globalContext';

// Styles
import { GlobalStyle } from '../styles/styling';
import { darkTheme, lightTheme } from '../styles/theme';

// Components
import { CustomCursor } from '../components/global/customCursor';

export const GlobalWrapper = ({ children }) => {
  const { currentTheme } = useGlobalStateContext();
  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <CustomCursor />
      {children}
    </ThemeProvider>
  );
};
