import { useMemo } from 'react';
import { useSelector } from 'react-redux';

// COMPONENTS
import { Todo } from '../Todos/Todo';

// SHARED COMPONENT
import { withToggle } from '../../shared/withToggle';

// HELPERS
import { filterData } from '../../utils/helper';
import RegularList from '../../shared/RegularList';

function CompletedTasks() {
  const { todos, sortBy } = useSelector((state) => state.todo);

  // SORT BY SLECTED DATA
  const sortedData = useMemo(() => filterData(todos, sortBy), [todos, sortBy]);

  // FILTER BY COMPLETED TASKS
  let completedTasks = sortedData.filter((task) => task.taskCompleted === true);


  return (
    <RegularList tasks={completedTasks} todo={Todo} />
  );
}

export default withToggle(CompletedTasks);
