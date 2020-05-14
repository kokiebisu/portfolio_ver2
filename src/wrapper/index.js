import React from 'react';

// Wrappers
import { ContextWrapper } from '../wrapper/context';
import { GlobalWrapper } from '../wrapper/global';

export const Wrapper = ({ children }) => {
  return (
    <ContextWrapper>
      <GlobalWrapper>{children}</GlobalWrapper>
    </ContextWrapper>
  );
};
