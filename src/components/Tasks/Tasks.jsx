// import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

import TaskModal from '../Modal/TaskModal';
import './Tasks.css';
import Task from './Task/Task';

const Tasks = props => {
  // props
  const { tasks, setTasks } = props;

  // states
  const [inputValue, setInputValue] = useState('');
  const [taskIndex, setTaskindex] = useState('');

  // edit modal methods
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseEditModal = () => setShowEditModal(false);

  // delete modal methods
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  // edit task
  const editTaskHandler = (index, inputValue) => {
    const allTasks = [...tasks];
    allTasks[index].title = inputValue;
    localStorage.setItem('tasks', JSON.stringify(allTasks));
    handleCloseEditModal();
  };
  // delete task handler
  const deleteTask = index => {
    const allTasks = [...tasks];
    allTasks.splice(index, 1);
    setTasks(allTasks);
    localStorage.setItem('tasks', JSON.stringify(allTasks));
    handleCloseDeleteModal();
  };

  // complete task handler
  const completeTaskHandler = (e, index) => {
    const allTasks = [...tasks];
    allTasks[index].isDone = !allTasks[index].isDone;
    e.target.classList.toggle('completed');
    localStorage.setItem('tasks', JSON.stringify(allTasks));
  };

  const editModal = showEditModal && (
    <TaskModal
      modalType='edit'
      show={showEditModal}
      setInputValue={setInputValue}
      inputValue={inputValue}
      onHide={handleCloseEditModal}
      editTaskHandler={editTaskHandler}
      taskIndex={taskIndex}
    />
  );

  const deleteModal = showDeleteModal && (
    <TaskModal
      modalType='delete'
      show={showDeleteModal}
      onHide={handleCloseDeleteModal}
      deleteTask={deleteTask}
      taskIndex={taskIndex}
    />
  );

  return (
    <>
      <ul className='list'>
        {tasks.map((task, index) => (
          <Task
            task={task}
            setTaskindex={setTaskindex}
            showDeleteModal={showDeleteModal}
            setShowDeleteModal={setShowDeleteModal}
            index={index}
            completeTaskHandler={completeTaskHandler}
            setShowEditModal={setShowEditModal}
          />
        ))}
      </ul>
      {editModal}
      {deleteModal}
    </>
  );
};

export default Tasks;
