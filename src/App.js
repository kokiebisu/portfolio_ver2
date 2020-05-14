import React, { useState } from 'react';

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from './context/globalContext';

// Components
import { Header } from './components/header';
import { Banner } from './components/banner';

// Helper
import { add, remove } from './util/helper';

function App() {
  const [notifications, setNotifications] = useState([]);

  const { cursorStyles } = useGlobalStateContext();
  const { dispatch } = useGlobalDispatchContext();

  const onCursor = (cursorType) => {
    cursorType =
      cursorType && cursorStyles.includes(cursorType) ? cursorType : false;
    dispatch({ type: 'TOGGLE_CURSOR', cursor: cursorType });
  };

  return (
    <>
      <Header
        onCursor={onCursor}
        addNotification={(number) =>
          setNotifications(add(notifications, number))
        }
      />
      <Banner />
    </>
  );
}

export default App;
