import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import './index.css';
import Main from './Main';

ReactDOM.render(
  <CookiesProvider>
    <Main />
  </CookiesProvider>,
  document.getElementById('root'),
);