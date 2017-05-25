import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
  // Router entry
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));

registerServiceWorker();
