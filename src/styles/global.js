import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'megadraft/dist/css/megadraft.css';

import { backgroundColor, textColor } from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: ${backgroundColor};
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: ${textColor};
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    display: flex;
    flex-direction: row;
  }
`;
