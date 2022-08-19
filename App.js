import React from 'react';
import { Provider } from 'react-redux';
import Main from './src/Main';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
