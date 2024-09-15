import { useMemo } from 'react';
import { useSelector } from 'react-redux';

// COMPONENTS
import { Todo } from '../Todos/Todo';

// SHARED COMPONENT (HOC)
import { withToggle } from '../../shared/withToggle';

// HELPERS
import {
filterData,
filteredCompletedTodayTasks,
} from '../../utils/helper';

// REACT COMPONENT

function TodayCompletedTasks() {
  // GLOBAL STATE
  const { todos, sortBy } = useSelector((state) => state.todo);

  // SORT DATE BY SELECTED SORT TYPE
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
export default withToggle(TodayCompletedTasks)