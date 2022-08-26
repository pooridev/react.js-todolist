import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App.jsx';
import ModalProvider from './Providers/Modal';
import TaskProvider from './Providers/Task';

ReactDOM.render(
  <ModalProvider>
    <TaskProvider>
      <App />
    </TaskProvider>
  </ModalProvider>,
  document.getElementById('root')
);
