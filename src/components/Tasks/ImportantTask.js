import { useSelector } from 'react-redux';
import { useMemo } from 'react';

// COMPONENTS
import { Todo } from '../Todos/Todo';

// SHARED COMPONENTS
import { withToggle } from '../../shared/withToggle';

// HELPERS
import { filterData } from '../../utils/helper';
import RegularList from '../../shared/RegularList';

function ImportantTask() {
  // GLOBAL STATE
  const { todos, sortBy } = useSelector((state) => state.todo);

  // DERIVED VALUE
  const sortedData = useMemo(() => filterData(todos, sortBy), [todos, sortBy]);

  // FILTER TASKS
  const urgentTask = sortedData.filter((task) => task.urgentTask === true);

  return (
    <RegularList tasks={urgentTask} todo={Todo} />
  );
}
export default withToggle(ImportantTask);
