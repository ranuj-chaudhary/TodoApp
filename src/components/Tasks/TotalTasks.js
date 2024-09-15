import { useMemo } from 'react';
import { useSelector } from 'react-redux';

// COMPONENTS
import { Todo } from '../Todos/Todo';

// HELPERS
import { filterData } from '../../utils/helper';

export function TotalTask() {

  // GLOBAL STATE
  const { todos, sortBy } = useSelector((state) => state.todo);

  // DERIVED VALUE
  const sortedData = useMemo(() => filterData(todos, sortBy), [todos, sortBy]);

  // FILTER TASKS BY IMPORTANT
  const urgentTask = sortedData.filter((task) => task.urgentTask === true);

  return (
    <ul className="complete_task flex flex-col gap-4 p-4">
      {urgentTask &&
        urgentTask.length > 0 &&
        urgentTask.map((task) => <Todo todo={task} key={task.id} />)}
    </ul>
  );
}
