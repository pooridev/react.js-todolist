import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App.jsx';
import ModalProvider from './providers/Modal';
import TaskProvider from './providers/Task';

ReactDOM.render(
  <ModalProvider>
    <TaskProvider>
      <App />
    </TaskProvider>
  </ModalProvider>,
  document.getElementById('root')
);
