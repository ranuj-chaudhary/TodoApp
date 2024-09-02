import { useSelector } from 'react-redux';
import { Todo } from '../Todos/Todo';
import { filterData } from '../../utils/helper';
import { useMemo } from 'react';

export function CompletedTasks() {
  const { todos, sortBy } = useSelector((state) => state.todo);

  // DERIVED VALUE
  const sortedData = useMemo(() => filterData(todos, sortBy), [todos, sortBy]);

  // FILTER TASKS
  const completedTasks = sortedData.filter(
    (task) => task.taskCompleted === true
  );

 
  return (
    <ul className="complete_task flex flex-col gap-4 p-4">
      {completedTasks &&
        completedTasks.length > 0 &&
        completedTasks.map((task) => <Todo todo={task} key={task.id} />)}
    </ul>
  );
}
