import React from 'react';

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from './context/globalContext';

// Components
import { Header } from './components/header';
import { Banner } from './components/banner';

function App() {
  const { cursorStyles } = useGlobalStateContext();
  const { dispatch } = useGlobalDispatchContext();

  const onCursor = (cursorType) => {
    cursorType =
      cursorType && cursorStyles.includes(cursorType) ? cursorType : false;
    dispatch({ type: 'TOGGLE_CURSOR', cursor: cursorType });
  };

  return (
    <>
      <Header onCursor={onCursor} />
      <Banner />
    </>
  );
}

export default App;
