import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import GlobalStyles from './styles/global';
import { MyThemeProvider } from './styles/ThemeContext';

import './config/ReactotronConfig';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <MyThemeProvider>
        <GlobalStyles />
        <Routes />
      </MyThemeProvider>
    </Provider>
  );
}

export default App;
