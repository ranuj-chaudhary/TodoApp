import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { errorMessage } from '../reducers/reducers';
import { addTodo } from '../reducers/reducers';

export const useAddTask = function () {
  const [taskTodo, setTaskTodo] = useState('');
  const [listType, setListType] = useState('');
  const dispatch = useDispatch();

  function handleTaskTodoChange(e) {
    let query = e.target.value;
    if (query.length > 120) {
      query = query.slice(0, 120) + '...';
    }
    setTaskTodo(query);
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

  return [
    taskTodo,
    listType,
    handleTaskTodoChange,
    handleOnKeyUp,
    handleSelectListType,
  ];
};
