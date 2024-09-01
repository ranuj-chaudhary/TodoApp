import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, errorMessage } from '../../reducers/reducers';

const addTaskStyle = {
  button:
    'ml-4 bg-blue-400 p-2 border font-bold text-white rounded-md hover:bg-blue-500',
  input: 'border-2 border-black rounded-md pl-2 flex-grow',
};

export const AddTask = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.todo);

  // component specific state
  const [taskTodo, setTaskTodo] = useState('');
  const task = {
    taskTodo,
  };

  function removeErrorIfAllInput(task) {
    if (task.taskTodo) {
      dispatch(errorMessage(''));
    }
  }

  function handleTaskTodoChange(e) {
    setTaskTodo(e.target.value);
    removeErrorIfAllInput(task);
  }

  function handleAddTask() {
    if (task.taskTodo) {
      dispatch(addTodo(task));
      dispatch(errorMessage(''));
      setTaskTodo('');
    } else {
      dispatch(errorMessage('Error occured enter all details to add the task'));
    }
  }

  return (
    <div className="h-1/5 absolute bottom-1 w-full">
      <div className="add__task w-full">
        <div className="add_todo__container flex p-4  align-middle gap-4">
          <label htmlFor="todo-task" hidden>
            Input task to add:
          </label>
          <input
            id="todo-task"
            value={taskTodo}
            type="text"
            className={addTaskStyle.input}
            onChange={handleTaskTodoChange}
            required
          />
          <button className={addTaskStyle.button} onClick={handleAddTask}>
            Add Task Todo
          </button>
        </div>
        <div>
          {error.length > 0 && (
            <p className="text-blue-700 font-bold">*{error}*</p>
          )}
        </div>
      </div>
    </div>
  );
};
