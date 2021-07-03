import React from 'react';

import { Button, Modal } from 'react-bootstrap';

const NewModal = props => {
	// props
	const {
		modalType,
		onHide,
		show,
		editTaskHandler,
		newTaskHandler,
		deleteTask,
		inputValue,
		setInputValue,
		taskIndex
	} = props;

	// modal title
	let modalTitle;
	modalType === 'add'
		? (modalTitle = 'Add New Task')
		: modalType === 'edit'
		? (modalTitle = 'Edit Task')
		: (modalTitle = 'Delete Task');

	// modal subtitle
	let modalMessage;
	modalType === 'edit'
		? (modalMessage = 'Edit Me')
		: modalType === 'add'
		? (modalMessage = 'Gimme a task')
		: (modalMessage = 'You wanna kill me ?😨');
	// modal button text
	let buttonText;
	modalType === 'add'
		? (buttonText = 'add')
		: modalType === 'edit'
		? (buttonText = 'edit')
		: (buttonText = 'Delete');

	// confirm button event
	let buttonMethod;
	modalType === 'add'
		? (buttonMethod = newTaskHandler)
		: modalType === 'edit'
		? (buttonMethod = () => editTaskHandler(taskIndex, inputValue))
		: (buttonMethod = () => deleteTask(taskIndex));

	return (
		<>
			<Modal show={show} animation={true} onHide={onHide}>
				<Modal.Header closeButton>
					<Modal.Title>{modalTitle}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{modalMessage}
					{modalType === 'add' ? (
						<input
							type='text'
							className='form-control'
							onChange={e => setInputValue(e.target.value)}
						/>
					) : modalType === 'edit' ? (
						<input
							type='text'
							className='form-control'
							onChange={e => setInputValue(e.target.value)}
						/>
					) : null}
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={onHide}>
						Close
					</Button>
					<Button variant='primary' onClick={buttonMethod}>
						{buttonText}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default NewModal;
