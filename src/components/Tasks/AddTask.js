import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, errorMessage } from '../../reducers/reducers';
import { useTheme } from '../../context/useThemeContext';
import { AiOutlinePlus } from 'react-icons/ai';

const addTaskStyle = {
  button:
    'ml-4 bg-blue-400 p-2 border font-bold text-white rounded-md hover:bg-blue-500',
  input:
    ' border-black rounded-md pl-10 flex-grow py-4 shadow-md focus:outline-blue-300 focus:border-b-[1px] focus:border-blue',
  section: 'absolute pt-4 pb-4  right-0 bottom-0 w-4/5 bg-transparent',
};

export const AddTask = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.todo);
  const { currentTheme } = useTheme();
  // component specific state
  const [taskTodo, setTaskTodo] = useState('');

  function handleTaskTodoChange(e) {
    setTaskTodo(e.target.value);
  }

  function handleOnKeyUp(event) {
    if (event.key === 'Enter') {
      if (taskTodo.length > 0) {
        dispatch(addTodo(taskTodo));
        dispatch(errorMessage(''));
        setTaskTodo('');
      }
    }
  }
  return (
    <div className={`${addTaskStyle.section} ${currentTheme.style} `}>
      <div className="add__task w-full">
        <div className="add_todo__container flex p-6 items-center gap-4">
          <label htmlFor="todo-task" hidden>
            Input task to add:
          </label>
          <AiOutlinePlus
            style={{
              position: 'absolute',
              marginLeft: '10px',
            }}
            size={18}
          />
          <input
            id="todo-task"
            value={taskTodo}
            type="text"
            className={addTaskStyle.input}
            onChange={handleTaskTodoChange}
            onKeyUp={handleOnKeyUp}
            required
            placeholder="Try Typing 'Bring Groceries, Fill Petrol, Pay Electric Bill' "
          />
        </div>
        <div className="pl-6 ">
          {error.length > 0 && (
            <p className="text-red-600 font-bold">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};
