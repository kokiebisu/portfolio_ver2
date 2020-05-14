import React from 'react';

// Wrappers
import { ContextWrapper } from './context';
import { GlobalWrapper } from './global';

export const Wrapper = ({ children }) => {
  return (
    <ContextWrapper>
      <GlobalWrapper>{children}</GlobalWrapper>
    </ContextWrapper>
  );
};
