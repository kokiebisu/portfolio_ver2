import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Blockis
import { Container, Flex } from '../styles/blocks';

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from '../context/globalContext';

// Components
import { Accordions } from './accordions';

export const Header = ({ onCursor, addNotification }) => {
  const { currentTheme } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const [notificationCount, setNotificationCount] = useState(0);

  const playNotification = () => {
    addNotification();
    setNotificationCount(notificationCount + 1);
  };

  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      dispatch({ type: 'TOGGLE_THEME', theme: 'light' });
    } else {
      dispatch({ type: 'TOGGLE_THEME', theme: 'dark' });
    }
  };

  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme);
  });

  return (
    <HeaderNav>
      <Container>
        <Flex noHeight spaceBetween>
          <Logo
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={onCursor}>
            <a href='/'>kok</a>
            <span
              onMouseEnter={() => onCursor('pointer')}
              onMouseLeave={() => onCursor('hovered')}
              onClick={toggleTheme}></span>
            <a href='/'>aj</a>
          </Logo>
          <div>
            {notificationCount < 4 ? (
              <AddButton
                whileTap={{ scale: 1.05 }}
                className='add'
                onClick={playNotification}>
                More About Me?
              </AddButton>
            ) : (
              <AccordionWrapper>
                <Accordions />
              </AccordionWrapper>
            )}
          </div>
        </Flex>
      </Container>
    </HeaderNav>
  );
};
const HeaderNav = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 0px;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
`;

const Logo = styled(motion.div)`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  a {
    font-family: Boniceta;
    font-size: 45px;
    /* font-weight: 800; */
    color: ${({ theme }) => theme.color};
  }

  span {
    position: relative;
    bottom: 5px;
    width: 14px;
    height: 18px;
    background: red;
    border-radius: 99%;
    background: ${({ theme }) => theme.pointer};
    margin: 0 4px;
    display: inline-block;
  }
`;

const AddButton = styled(motion.button)`
  outline: none;
  -webkit-appearance: none;
  cursor: pointer;
  text-decoration: none;
  border: none;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-family: 200;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: 2px solid ${({ theme }) => theme.color};
  &.add {
    padding: 10px 20px;
    border-radius: 20px;
  }
  margin-right: 20px;
`;

const AccordionWrapper = styled(motion.div)`
  position: relative;
  top: 260px;
  width: 320px;
  padding: 10px;
  padding-bottom: 5px;
  border-radius: 20px;
  background-color: transparent;
`;

export default Header;
