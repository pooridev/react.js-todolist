import React from 'react';

import TaskModal from '../Modal/TaskModal';
import Task from './Task/Task';
import { useContext } from 'react';
import { ModalContext } from './../../Providers/Modal';
import { TaskContext } from '../../Providers/Task';

import './Tasks.css';

const Tasks = () => {
  const { tasks } = useContext(TaskContext);
  const {
    showEditModal,
    showDeleteModal,
    handleCloseEditModal,
    handleCloseDeleteModal
  } = useContext(ModalContext);

  const editModal = showEditModal && (
    <TaskModal
      modalType='edit'
      onHide={handleCloseEditModal}
      show={showEditModal}
    />
  );

  const deleteModal = showDeleteModal && (
    <TaskModal
      modalType='delete'
      onHide={handleCloseDeleteModal}
      show={showDeleteModal}
    />
  );

  return (
    <ul className='list'>
      {tasks.map((task, index) => (
        <Task task={task} index={index} />
      ))}
      {editModal}
      {deleteModal}
    </ul>
  );
};

export default Tasks;
