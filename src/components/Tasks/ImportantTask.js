import { useSelector } from 'react-redux';
import { useMemo } from 'react';

// COMPONENTS
import { Todo } from '../Todos/Todo';

// SHARED COMPONENTS
import { withToggle } from '../../shared/withToggle';

// HELPERS
import { filterData } from '../../utils/helper';

function ImportantTask() {
  // GLOBAL STATE
  const { todos, sortBy } = useSelector((state) => state.todo);

  // DERIVED VALUE
  const sortedData = useMemo(() => filterData(todos, sortBy), [todos, sortBy]);

  // FILTER TASKS
  const urgentTask = sortedData.filter((task) => task.urgentTask === true);

  return (
    <ul className="complete_task flex flex-col gap-4 p-4">
      {urgentTask &&
        urgentTask.length > 0 &&
        urgentTask.map((task) => <Todo todo={task} key={task.id} />)}
    </ul>
  );
}
export default withToggle(ImportantTask);
