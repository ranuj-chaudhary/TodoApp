import { useSelector } from 'react-redux';

// COMPONENTS
import { Todo } from '../Todos/Todo';

// SHARED COMPONENTS
import { withToggle } from '../../shared/withToggle';

// HELPERS
import { filterData } from '../../utils/helper';
import RegularList from '../../shared/RegularList';

function IncompleteTasks() {
  // GLOBAL STATE
  const { todos, sortBy } = useSelector((state) => state.todo);

  // SORT BY TYPE OF SELETED SORT TYPE
  const sortedData = filterData(todos, sortBy);

  // FILTER BY INCOMPLETE TASK
  let incomleteTasks = sortedData.filter(
    (task) => task.taskCompleted === false
  );

  return (
    <RegularList tasks={incomleteTasks} todo={Todo} />
  );
}

export default withToggle(IncompleteTasks);
