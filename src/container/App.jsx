import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useContext } from 'react';

import TaskModal from '../components/Modal/TaskModal';
import Tasks from '../components/Tasks/Tasks';

import { v4 as uuidv4 } from 'uuid';
import { ModalContext } from '../Providers/Modal';
import './App.css';

const App = () => {
  // states
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  // Modal context data
  const { handleCloseNewTaskModal, showNewTaskModal, setshowNewTaskModal } = useContext(ModalContext);
  // new task handler
  const handleNewTask = () => {
    const newTask = {
      title: inputValue,
      id: uuidv4(),
      isDone: false
    };
    const oldTasks = tasks;
    oldTasks.push(newTask);
    setTasks(oldTasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setInputValue('');
    handleCloseNewTaskModal();
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    Toast.fire({
      icon: 'success',
      title: 'Now we have new task 😍'
    });
  };
  const newTaskModal = showNewTaskModal && (
    <TaskModal
      modalType='add'
      show={showNewTaskModal}
      onHide={handleCloseNewTaskModal}
      setInputValue={setInputValue}
      newTaskHandler={handleNewTask}
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
          <Tasks
            tasks={tasks}
            setTasks={setTasks}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
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
