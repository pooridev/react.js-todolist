import { useContext } from 'react';
import GithubCTA from '../components/CTA/GithubCTA';
import Header from '../components/Header/Header';

import TaskModal from '../components/Modal/TaskModal';
import Tasks from '../components/Tasks/Tasks';
import { ModalContext } from '../providers/Modal';
import './App.css';

const App = () => {
  // Modal context data
  const { handleCloseNewTaskModal, showNewTaskModal, handleOpenNewTaskModal } =
    useContext(ModalContext);

  const newTaskModal = showNewTaskModal && (
    <TaskModal
      modalType='add'
      onShow={showNewTaskModal}
      onHide={handleCloseNewTaskModal}
    />
  );
  return (
    <>
      <main className='to-do'>
        <Header />
        <section className='to-do__body'>
          <Tasks />
        </section>
        <button
          onClick={handleOpenNewTaskModal}
          className='newTaskModalTrigger'>
          <i className='bx bx-plus-circle'></i>
        </button>
        {newTaskModal}
      </main>
      <GithubCTA />
    </>
  );
};

export default App;
