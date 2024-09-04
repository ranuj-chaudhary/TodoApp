import { useDispatch } from 'react-redux';
import { AiFillStar } from 'react-icons/ai';
import { completeTask, deleteTodo } from '../../reducers/reducers';
import { getCurrentDateTime } from '../../utils/helper';
import { updateUrgentTask } from '../../reducers/reducers';
import { AiTwotoneDelete } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const {
    heading,
    content,
    timeStamp,
    id,
    isPrivate,
    taskCompleted,
    urgentTask,
  } = todo;
  const { presentDate, presentTime } = getCurrentDateTime(timeStamp);

  function handleToChangeTodoStatus(e) {
    let isChecked = e.target.checked;
    dispatch(completeTask(id, isChecked));
  }

  function handleUrgentStar(id) {
    dispatch(updateUrgentTask(id));
    console.log(id);
  }

  function handleDelete(id) {
    dispatch(deleteTodo(id));
  }

  return (
    <li className="border-blue-600 rounded-md w-full p-4  bg-white opacity-85 relative flex align-middle">
      <div className="complete__task">
        <input
          type="checkbox"
          className="w-4 h-4 border-2 border-blue-500 rounded-sm bg-white cursor-pointer transition-all duration-700"
          onChange={handleToChangeTodoStatus}
          checked={taskCompleted}
        />
      </div>
      <div className="task flex-grow flex align-middle pl-2  ">
        <p className={taskCompleted ? 'line-through' : ''}>{content}</p>
      </div>
      <div className="date__time text-xs flex items-center">
        <span>
          {presentDate} | {presentTime}
        </span>
      </div>
      <div className="important_task cursor-pointer flex items-center pl-2">
        <AiFillStar
          color={`${urgentTask ? '#333333' : '#999999'}`}
          size={20}
          onClick={() => handleUrgentStar(id)}
        />
      </div>
      <div className="important_task cursor-pointer flex items-center pl-2">
        <AiFillDelete
          color={'#333333'}
          size={20}
          onClick={() => handleDelete(id)}
        />
      </div>
    </li>
  );
};
