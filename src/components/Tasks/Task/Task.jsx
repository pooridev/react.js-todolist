import { useContext } from 'react';
import { ModalContext } from '../../../providers/Modal';
import { TaskContext } from '../../../providers/Task';

const Task = props => {
  const { task, index } = props;
  const { setTaskindex, completeTaskHandler } = useContext(TaskContext);
  const { handleOpenEditModal, handleOpenDeleteModal } =
    useContext(ModalContext);

  return (
    <li className='d-flex justify-content-between align-items-end'>
      <div>
        <span
          className='mx-1 delete-task'
          onClick={() => {
            setTaskindex(index);
            handleOpenDeleteModal();
          }}>
          <i className='bx bx-trash-alt'></i>
        </span>
        <span
          className='mx-1 edit-task'
          onClick={() => {
            setTaskindex(index);
            handleOpenEditModal();
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
