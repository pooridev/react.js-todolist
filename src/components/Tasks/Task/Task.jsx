const Task = ({ task }) => {
  return (
    <li className='d-flex justify-content-between align-items-end'>
      <div>
        <span className='mx-1 delete-task'>
          <i className='bx bx-trash-alt'></i>
        </span>
        <span className='mx-1 edit-task'>
          <i className='bx bxs-edit'></i>
        </span>
      </div>
      <span className={`${task?.isDone && 'completed'} task`}>
        {task.title}
      </span>
    </li>
  );
};

export default Task;
