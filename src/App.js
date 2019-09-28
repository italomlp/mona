import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import GlobalStyles from './styles/global';
import { MyThemeProvider } from './styles/ThemeContext';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MyThemeProvider>
          <ToastContainer autoClose={3000} />
          <GlobalStyles />
          <Router history={history}>
            <Routes />
          </Router>
        </MyThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
