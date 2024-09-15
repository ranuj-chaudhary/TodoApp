import { useMemo } from 'react';
import { useSelector } from 'react-redux';

// COMPONENTS
import { Todo } from '../Todos/Todo';

// SHARED COMPONENTS
import { withToggle } from '../../shared/withToggle';

// HELPERS
import { filterData, filteredIncompletedTodayTasks } from '../../utils/helper';

function TodayIncompleteTasks() {
  // GLOBAL STATE
  const { todos, sortBy } = useSelector((state) => state.todo);

  // SORT DATE BY SELECTE SORT TYPE
  const sortedData = useMemo(() => filterData(todos, sortBy), [todos, sortBy]);

  // FITLER DATA BY INCOMPLETE TASKS
  const todayIncompletedTasks = filteredIncompletedTodayTasks(sortedData);

  return (
    <ul className="incomplete_task flex flex-col gap-4 p-4">
      {todayIncompletedTasks &&
        todayIncompletedTasks.length > 0 &&
        todayIncompletedTasks.map((task) => <Todo todo={task} key={task.id} />)}
    </ul>
  );
}

export default withToggle(TodayIncompleteTasks);
