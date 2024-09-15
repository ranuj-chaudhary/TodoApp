import { useMemo } from 'react';
import { useSelector } from 'react-redux';

// COMPONENTS
import { Todo } from '../Todos/Todo';

// SHARED COMPONENT
import { withToggle } from '../../shared/withToggle';

// HELPERS
import { filterData } from '../../utils/helper';

function CompletedTasks() {
  const { todos, sortBy } = useSelector((state) => state.todo);

  // SORT BY SLECTED DATA
  const sortedData = useMemo(() => filterData(todos, sortBy), [todos, sortBy]);

  // FILTER BY COMPLETED TASKS
  let completedTasks = sortedData.filter((task) => task.taskCompleted === true);

  return (
    <ul className="complete_task flex flex-col gap-4 p-4">
      {completedTasks &&
        completedTasks.length > 0 &&
        completedTasks.map((task) => <Todo todo={task} key={task.id} />)}
    </ul>
  );
}

export default withToggle(CompletedTasks);
