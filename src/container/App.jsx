import React from 'react';
import { useContext } from 'react';

import TaskModal from '../components/Modal/TaskModal';
import Tasks from '../components/Tasks/Tasks';
import { ModalContext } from '../Providers/Modal';
import './App.css';

const App = () => {
  // Modal context data
  const { handleCloseNewTaskModal, showNewTaskModal, setshowNewTaskModal } =
    useContext(ModalContext);

  const newTaskModal = showNewTaskModal && (
    <TaskModal
      modalType='add'
      show={showNewTaskModal}
      onHide={handleCloseNewTaskModal}
    />
  );
  return (
    <>
      <main className='container pt-5'>
        {/*To Do Header*/}
        <header className='to-do__header'>
          <h2>To Do List</h2>
        </header>
        {/*To Do Body*/}
        <section className='to-do__body'>
          {/*list*/}
          <Tasks />
        </section>
        {/*new task button*/}
        <button
          onClick={() => setshowNewTaskModal(!showNewTaskModal)}
          className='newTaskModalTrigger'>
          <i className='bx bx-plus-circle'></i>
        </button>
        {/*/new task button*/}
        {/*/To Do Body*/}
        {newTaskModal}
      </main>
      <a
        href='https://github.com/Pooria-Faramarzian'
        className='git-hub__cta m-4'>
        <i className='bx bxl-github'></i>
      </a>
    </>
  );
};

export default App;
