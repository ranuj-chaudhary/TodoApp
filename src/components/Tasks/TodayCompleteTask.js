import { useSelector } from 'react-redux';
import { Todo } from '../Todos/Todo';
import {
  filterData,
  filteredCompletedTodayTasks,
} from '../../utils/helper';
import { useMemo } from 'react';

export function TodayCompletedTasks() {
  const { todos, sortBy } = useSelector((state) => state.todo);
  // DERIVED VALUE
  const sortedData = useMemo(() => filterData(todos, sortBy), [todos, sortBy]);

  // FILTER TODAY TASKS
  const todayCompletedTasks = filteredCompletedTodayTasks(sortedData);

  return (
    <ul className="complete_task flex flex-col gap-4 p-4">
      {todayCompletedTasks &&
        todayCompletedTasks.length > 0 &&
        todayCompletedTasks.map((task) => <Todo todo={task} key={task.id} />)}
    </ul>
  );
}
