import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import GlobalStyles from './styles/global';
import { MyThemeProvider } from './styles/ThemeContext';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <MyThemeProvider>
        <GlobalStyles />
        <Router history={history}>
          <Routes />
        </Router>
      </MyThemeProvider>
    </Provider>
  );
}

export default App;
