import { useDispatch } from 'react-redux';
import { CiStar } from 'react-icons/ci';

import { completeTask } from '../../reducers/reducers';
import { getCurrentDateTime } from '../../utils/helper';

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

  return (
    <li className="border-blue-600 rounded-md w-full p-4  bg-yellow-200 opacity-85 relative flex align-middle">
      <div className="complete__task">
        <input
          type="checkbox"
          className="w-4 h-4 border-2 border-blue-500 rounded-sm bg-white"
          onChange={handleToChangeTodoStatus}
          checked={taskCompleted}
        />
      </div>
      <div className="task flex-grow flex align-middle pl-2 ">
        <p className={taskCompleted ? 'line-through' : ''}>{content}</p>
      </div>
      <div className="important_task">
        <CiStar />
      </div>
    </li>
  );
};
