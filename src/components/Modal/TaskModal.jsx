import { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { TaskContext } from '../../providers/Task';

const TaskModal = props => {
  // props
  const { modalType, onHide, onShow } = props;

  // context
  const {
    setInputValue,
    inputValue,
    taskIndex,
    deleteTaskHandler,
    handleNewTask,
    editTaskHandler
  } = useContext(TaskContext);

  // Modal elements
  let modalDecription;
  let modalTitle;
  let buttonText;
  let buttonMethod;

  switch (modalType) {
    case 'add':
      modalTitle = 'Add New Task';
      modalDecription = 'Gimme a task';
      buttonText = 'add';
      buttonMethod = handleNewTask;
      break;
    case 'edit':
      modalTitle = 'Edit Task';
      modalDecription = 'Edit Me';
      buttonText = 'edit';
      buttonMethod = buttonMethod = () =>
        editTaskHandler(taskIndex, inputValue);
      break;
    case 'delete':
      modalTitle = 'Delete Task';
      modalDecription = 'You wanna kill me ?😨';
      buttonText = 'delete';
      buttonMethod = buttonMethod = () => deleteTaskHandler(taskIndex);
      break;
    default:
      throw new Error('Should not reach here');
  }

  // modal input
  let modalInput = null;
  switch (modalType) {
    case 'edit':
      modalInput = (
        <input
          type='text'
          className='form-control'
          onChange={e => setInputValue(e.target.value)}
        />
      );
      break;
    case 'add':
      modalInput = (
        <input
          type='text'
          className='form-control'
          onChange={e => setInputValue(e.target.value)}
        />
      );
      break;
    default:
  }

  return (
    <Modal show={onShow} animation={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modalDecription}
        {modalInput}
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
  );
};
export default TaskModal;
