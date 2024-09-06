import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodo, errorMessage } from '../../reducers/reducers';
import { useTheme } from '../../context/useThemeContext';
import { AiOutlinePlus } from 'react-icons/ai';
import { removeSpaceFromString } from '../../utils/helper';

const addTaskStyle = {
  button:
    'ml-4 bg-blue-400 p-2 border font-bold text-white rounded-md hover:bg-blue-500',
  input:
    ' border-black rounded-md pl-10 flex-grow py-4 shadow-md focus:outline-blue-300 focus:border-b-[1px] focus:border-blue',
  section: 'absolute pt-4 pb-4  right-0 bottom-0 w-4/5 bg-transparent',
};

export const AddTask = () => {
  const dispatch = useDispatch();
  const { error, customList } = useSelector((state) => state.todo);
  const [taskTodo, setTaskTodo] = useState('');
  const [listType, setListType] = useState('');

  // theme context hook
  const { currentTheme } = useTheme();

  // component specific state

  function handleTaskTodoChange(e) {
    setTaskTodo(e.target.value);
  }

  function handleOnKeyUp(event) {
    if (event.key === 'Enter') {
      if (taskTodo.length > 0) {
        dispatch(addTodo(taskTodo, listType));
        dispatch(errorMessage(''));
        setTaskTodo('');
      }
    }
  }

  function handleSelectListType(e) {
    setListType(e.target.value);
  }

  return (
    <div className={`${addTaskStyle.section} ${currentTheme.style} `}>
      <div className="add__task w-full">
        <div className="add_todo__container flex p-6 items-center gap-4 relative">
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
          <SelectListType
            onSelectListType={handleSelectListType}
            listtype={listType}
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

function SelectListType({ listType, onSelectListType }) {
  const { customList } = useSelector((state) => state.todo);
  return (
    <div className="select__list absolute right-10 h-auto ">
      <select
        name=""
        id=""
        className="capitalize h-8 bg-blue-200 w-48 pl-2 rounded-md border-none outline-none bg-opacity-75 hover:bg-opacity-85 transition-colors duration-300"
        value={listType}
        onChange={onSelectListType}
      >
        {customList &&
          customList.length > 0 &&
          customList.map((list) => {
            const name = removeSpaceFromString(list.name);
            return (
              <option value={name} key={list.id}>
                {list.name}
              </option>
            );
          })}
      </select>
    </div>
  );
}
