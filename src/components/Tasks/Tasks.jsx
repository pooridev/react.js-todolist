import React from 'react';

import TaskModal from '../Modal/TaskModal';
import Task from './Task/Task';
import './Tasks.css';

const Tasks = () => {
  const tasks = [];
  return (
    <ul className='list'>
      {tasks.map((task, index) => (
        <Task task={task} index={index} />
      ))}
    </ul>
  );
};

export default Tasks;
