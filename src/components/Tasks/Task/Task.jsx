import { useContext } from 'react';
import { ModalContext } from '../../../Providers/Modal';
import { TaskContext } from '../../../Providers/Task';

const Task = props => {
  const { task, index } = props;
  const { setTaskindex, completeTaskHandler } = useContext(TaskContext);
  const {
    showEditModal,
    showDeleteModal,
    setShowEditModal,
    setShowDeleteModal
  } = useContext(ModalContext);

  return (
    <li
      key={task.id}
      className='d-flex justify-content-between align-items-end'>
      <div>
        <span
          className='mx-1 delete-task'
          onClick={() => {
            setTaskindex(index);
            setShowDeleteModal(!showDeleteModal);
          }}>
          <i className='bx bx-trash-alt'></i>
        </span>
        <span
          className='mx-1 edit-task'
          onClick={() => {
            setTaskindex(index);
            setShowEditModal(!showEditModal);
          }}>
          <i className='bx bxs-edit'></i>
        </span>
      </div>
      <span
        className={`${task.isDone && 'completed'} task`}
        onClick={e => completeTaskHandler(e, index)}>
        {task.title}
      </span>
    </li>
  );
};

export default Task;
