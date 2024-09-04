import { useSelector } from 'react-redux';
import { Todo } from '../Todos/Todo';
import { filterData, filteredIncompletedTodayTasks } from '../../utils/helper';
import { useMemo } from 'react';

export function TodayIncompleteTasks() {
  const { todos, sortBy } = useSelector((state) => state.todo);
  const sortedData = useMemo(() => filterData(todos, sortBy), [todos, sortBy]);

  const todayIncompletedTasks = filteredIncompletedTodayTasks(sortedData);

  return (
    <ul className="incomplete_task flex flex-col gap-4 p-4">
      {todayIncompletedTasks &&
        todayIncompletedTasks.length > 0 &&
        todayIncompletedTasks.map((task) => <Todo todo={task} key={task.id} />)}
    </ul>
  );
}
