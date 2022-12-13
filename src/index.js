import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';

import 'reset-css';
import './scss/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// ok