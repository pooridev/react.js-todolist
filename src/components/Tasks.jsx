// import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

import NewModal from './NewModal';
import './Tasks.css';

const Tasks = props => {
	// props
	const { tasks, setTasks } = props;

	// states
	const [inputValue, setInputValue] = useState('');
	const [taskIndex, setTaskindex] = useState('40');

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

	const editModal = showEditModal ? (
		<NewModal
			modalType='edit'
			show={showEditModal}
			setInputValue={setInputValue}
			inputValue={inputValue}
			onHide={handleCloseEditModal}
			editTaskHandler={editTaskHandler}
			taskIndex={taskIndex}
		/>
	) : null;

	const deleteModal = showDeleteModal ? (
		<NewModal
			modalType='delete'
			show={showDeleteModal}
			onHide={handleCloseDeleteModal}
			deleteTask={deleteTask}
			taskIndex={taskIndex}
		/>
	) : null;

	return (
		<>
			<ul className='list text-center py-3'>
				{tasks.map((task, index) => (
					<li
						key={task.id}
						className='d-flex justify-content-between align-items-end'>
						<div>
							{/* delete task button */}
							<span
								className='mx-1 delete-task'
								onClick={() => {
									setTaskindex(index);
									setShowDeleteModal(!showDeleteModal);
								}}>
								<i className='bx bx-trash-alt'></i>
							</span>
							{/* end delete task button */}
							{/* edit task button */}
							<span
								className='mx-1 edit-task'
								onClick={() => {
									setTaskindex(index);
									setShowEditModal(!showEditModal);
								}}>
								<i className='bx bxs-edit'></i>
							</span>
							{/* end edit task button */}
						</div>
						<span
							className={task.isDone ? 'completed' : null}
							onClick={e => completeTaskHandler(e, index)}>
							{task.title}
						</span>
					</li>
				))}
			</ul>
			{editModal}
			{deleteModal}
		</>
	);
};

export default Tasks;
