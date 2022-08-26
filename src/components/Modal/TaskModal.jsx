import { Button, Modal } from 'react-bootstrap';

const TaskModal = () => {
  return (
    <Modal show={Function.bind()} animation={true} onHide={Function.bind()}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Add task
        <input type='text' className='form-control' />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={Function.bind()}>
          Close
        </Button>
        <Button variant='primary' onClick={Function.bind()}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default TaskModal;
