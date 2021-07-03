import React, { useState } from 'react';
import Swal from 'sweetalert2';
import NewModal from '../components/NewModal';
import { v4 as uuidv4 } from 'uuid';
import Tasks from '../components/Tasks';

import './App.css';
const App = () => {
	// states
	const [inputValue, setInputValue] = useState('');
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem('tasks')) || []
	);
	// delete modal methods
	const [showNewTaskModal, setshowNewTaskModal] = useState(false);
	const handleCloseNewTaskModal = () => setshowNewTaskModal(false);

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
	const newTaskModal = showNewTaskModal ? (
		<NewModal
			modalType='add'
			show={showNewTaskModal}
			onHide={handleCloseNewTaskModal}
			setInputValue={setInputValue}
			newTaskHandler={handleNewTask}
		/>
	) : null;
	return (
		<>
			<main className='container pt-5'>
				{/*To Do Header*/}
				<div className='row '>
					<header className='to-do__header mx-auto col-8 p-3'>
						<h2>To Do List</h2>
					</header>
				</div>
				{/*/To Do Header*/}
				{/*To Do Body*/}
				<div className='row pt-3'>
					<section className='to-do__body mx-auto col-8'>
						{/*list*/}
						<Tasks
							tasks={tasks}
							setTasks={setTasks}
							inputValue={inputValue}
							setInputValue={setInputValue}
						/>
						{/*/list*/}
					</section>

					{/*new task button*/}
					<div className='d-flex justify-content-center col-12'>
						<button
							onClick={() => setshowNewTaskModal(!showNewTaskModal)}
							className='newTaskModalTrigger'
							data-toggle='modal'
							data-target='#newTask'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='65'
								height='65'
								viewBox='0 0 24 24'
								style={{ transform: ';-ms-filter:' }}>
								<path d='M13 7L11 7 11 11 7 11 7 13 11 13 11 17 13 17 13 13 17 13 17 11 13 11z'></path>
								<path d='M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z'></path>
							</svg>
						</button>
					</div>
					{/*/new task button*/}
				</div>

				{/*/To Do Body*/}
				{newTaskModal}
			</main>
			{/* GitHub icon */}
			<a href='https://github.com/Pooria-Faramarzian' className='git-hub__cta m-4'>
				<i className='bx bxl-github'></i>
			</a>
		</>
	);
};

export default App;
