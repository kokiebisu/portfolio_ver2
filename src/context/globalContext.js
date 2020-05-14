import React, { createContext, useReducer, useContext } from 'react';

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        currentTheme: action.theme,
      };
    }
    case 'TOGGLE_CURSOR': {
      return {
        ...state,
        cursorType: action.cursor,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme:
      window.localStorage.getItem('theme') === null
        ? 'dark'
        : window.localStorage.getItem('theme'),
    cursorType: false,
    cursorStyles: ['pointer', 'hovered'],
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
export const useGlobalStateContext = () => useContext(GlobalStateContext);
