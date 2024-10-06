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
import RegularList from '../../shared/RegularList';

// REACT COMPONENT

function TodayCompletedTasks() {
  // GLOBAL STATE
  const { todos, sortBy } = useSelector((state) => state.todo);

  // SORT DATE BY SELECTED SORT TYPE
  const sortedData = useMemo(() => filterData(todos, sortBy), [todos, sortBy]);

  // FILTER TODAY TASKS
  const todayCompletedTasks = filteredCompletedTodayTasks(sortedData);

  return (
    <RegularList tasks={todayCompletedTasks} todo={Todo} />
  );


}
export default withToggle(TodayCompletedTasks)