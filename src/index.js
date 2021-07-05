import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App.jsx';
import ModalProvider from './Providers/Modal.js';

ReactDOM.render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  document.getElementById('root')
);
