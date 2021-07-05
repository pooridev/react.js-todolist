import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App.jsx';
import ModalProvider from './Providers/Modal.js';
import TaskProvider from './Providers/Task.js';

ReactDOM.render(
  <ModalProvider>
    <TaskProvider>
      <App />
    </TaskProvider>
  </ModalProvider>,
  document.getElementById('root')
);
