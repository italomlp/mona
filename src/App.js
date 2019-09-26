import React from 'react';

import Routes from './routes';
import GlobalStyles from './styles/global';
import { MyThemeProvider } from './styles/ThemeContext';

function App() {
  return (
    <MyThemeProvider>
      <GlobalStyles />
      <Routes />
    </MyThemeProvider>
  );
}

export default App;
