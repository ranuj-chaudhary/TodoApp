import { useSelector } from 'react-redux';

// THEME CONTEXT
import { useTheme } from '../../context/useThemeContext';

// ICONS
import { AiOutlinePlus } from 'react-icons/ai';

// HELPERS
import { removeSpaceFromString } from '../../utils/helper';
import { useAddTask } from '../../hooks/useAddTask';

// STYLES
const addTaskStyle = {
  button:
    'ml-4 bg-blue-400 p-2 border font-bold text-white rounded-md hover:bg-blue-500',
  input:
    ' border-black rounded-md pl-10 flex-grow py-4 shadow-md focus:outline-blue-300 focus:border-b-[1px] focus:border-blue',
  section: 'absolute pt-4 pb-4  right-0 bottom-0 w-4/5 h-1/5 bg-transparent',
};

export const AddTask = () => {
  // GLOBAL STATE
  const { error } = useSelector((state) => state.todo);

  // CUSTOM HOOK ADD TASK
  const [
    taskTodo,
    listType,
    handleTaskTodoChange,
    handleOnKeyUp,
    handleSelectListType,
  ] = useAddTask();

  // THEME COTEXT HOOK (GET CURRENT THEME SELECTED BY USER)
  const { currentTheme } = useTheme();

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
            listType={listType}
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
  const { currentTheme } = useTheme();

  const { customList } = useSelector((state) => state.todo);
  const selectListStyle = {
    select:
      'capitalize h-12  outline-2 outline-black w-36 pl-2 rounded-md border-none  bg-opacity-75 hover:bg-opacity-85 transition-colors duration-300',
  };
  console.log(listType);
  return (
    <div
      className={`select__list absolute right-7 h-auto rounded-md flex items-center ${
        listType?.length > 0 ? 'border-2 border-gray-800' : ''
      }`}
    >
      <select
        name=""
        id=""
        className={`${selectListStyle.select} ${currentTheme.style}`}
        value={listType}
        onChange={onSelectListType}
      >
        <option value="">add category</option>
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
