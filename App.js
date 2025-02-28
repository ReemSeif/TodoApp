import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import Router from './src/Router';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store';

export default function App() {
 
  return ( 
    <Provider store={Store}>
      <Router/>
    </Provider>

  );
}

