import { useEffect, useState } from 'react';

// Hook
export const useWindowSize = () => {
  const isClient = typeof window !== 'undefined';

  function getSize() {
    if (isClient) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    return {
      width: 0,
      height: 0,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    if (isClient) {
      window.addEventListener('resize', handleResize);
    }
    return () => {
      if (isClient) {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};
