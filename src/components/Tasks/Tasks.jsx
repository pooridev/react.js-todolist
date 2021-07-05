import React, { useState } from 'react';

import TaskModal from '../Modal/TaskModal';
import Task from './Task/Task';
import { useContext } from 'react';
import { ModalContext } from './../../Providers/Modal';
import './Tasks.css';

const Tasks = props => {
  // props
  const { tasks, setTasks } = props;

  // states
  const [inputValue, setInputValue] = useState('');
  const [taskIndex, setTaskindex] = useState('');

  const {
    handleCloseEditModal,
    handleCloseDeleteModal,
    setShowEditModal,
    showEditModal,
    showDeleteModal,
    setShowDeleteModal
  } = useContext(ModalContext);
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
