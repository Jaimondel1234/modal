import React from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { GlobalStyle } from './styles/GlobalStyle';

const ModalApp = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppRouter />
    </Provider>
  );
};

export default ModalApp;
