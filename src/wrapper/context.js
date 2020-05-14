import React from 'react';
import { GlobalProvider } from '../context/globalContext';

export const ContextWrapper = ({ children }) => {
  return <GlobalProvider>{children}</GlobalProvider>;
};
