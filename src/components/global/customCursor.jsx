import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useGlobalStateContext } from '../../context/globalContext';

export const CustomCursor = () => {
  const { cursorType } = useGlobalStateContext();
  const cursor = useRef(null);

  const onMouseMove = (event) => {
    const { clientX, clientY } = event;
    cursor.current.style.left = `${clientX}px`;
    cursor.current.style.top = `${clientY}px`;
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <Cursor
      className={`${!!cursorType ? 'hovered' : ``} ${cursorType}`}
      ref={cursor}
    />
  );
};

const Cursor = styled.div`
  position: fixed;
  top: 400px;
  left: 400px;
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.pointer};
  border-radius: 99%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;

  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${({ theme }) => theme.pointer};
  }

  &.pointer {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    animation: pulse 2s infinite;
    background: ${({ theme }) => theme.pointer} !important;
    height: 18px;
    width: 18px;
    border: 1px solid ${({ theme }) => theme.pointer} !important;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 ${({ theme }) => theme.pointer};
    }

    70% {
      box-shadow: 0 0 0 20px rgba(255, 0, 0, 0);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
    }
  }
`;
