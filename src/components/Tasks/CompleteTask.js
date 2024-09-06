import { useSelector } from 'react-redux';
import { Todo } from '../Todos/Todo';
import { filterData } from '../../utils/helper';
import { useMemo } from 'react';
import { useLocation } from 'react-router';

export function CompletedTasks() {
  const { todos, sortBy } = useSelector((state) => state.todo);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const listType = queryParams.get('type');

  // SORT BY SLECTED DATA
  const sortedData = useMemo(() => filterData(todos, sortBy), [todos, sortBy]);

  // FILTER BY COMPLETED TASKS
  let completedTasks = sortedData.filter((task) => task.taskCompleted === true);

  // IF QUERY PARAM TYPE EXIST FILTER DATA BY LIST TYPE
  if (listType.length > 0) {
    completedTasks = sortedData.filter((task) => task.category === listType);
  }
  return (
    <ul className="complete_task flex flex-col gap-4 p-4">
      {completedTasks &&
        completedTasks.length > 0 &&
        completedTasks.map((task) => <Todo todo={task} key={task.id} />)}
    </ul>
  );
}
