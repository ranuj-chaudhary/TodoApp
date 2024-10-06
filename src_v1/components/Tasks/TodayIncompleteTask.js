import { useMemo } from 'react';
import { useSelector } from 'react-redux';

// COMPONENTS
import { Todo } from '../Todos/Todo';

// SHARED COMPONENTS
import { withToggle } from '../../shared/withToggle';

// HELPERS
import { filterData, filteredIncompletedTodayTasks } from '../../utils/helper';
import RegularList from '../../shared/RegularList';

function TodayIncompleteTasks() {
  // GLOBAL STATE
  const { todos, sortBy } = useSelector((state) => state.todo);

  // SORT DATE BY SELECTE SORT TYPE
  const sortedData = useMemo(() => filterData(todos, sortBy), [todos, sortBy]);

  // FITLER DATA BY INCOMPLETE TASKS
  const todayIncompletedTasks = filteredIncompletedTodayTasks(sortedData);

  return (
    <RegularList tasks={todayIncompletedTasks} todo={Todo} />
  );
}

export default withToggle(TodayIncompleteTasks);
