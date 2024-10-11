import { useSelector } from 'react-redux';

import { withToggle } from '../../shared/withToggle';
import { Todo } from '../../features/todos';

// HELPERS
import { filterData } from '../../utils/helper';
import RegularList from '../../shared/RegularList';

function Tasks({ onFilterTask }) {
  const { todos, sortBy } = useSelector((state) => state.todo);
  // SORT BY SLECTED DATA
  const sortedData = filterData(todos, sortBy);
  
  // FILTER TASK
  let fiteredTodos = onFilterTask(sortedData);
 

  return <RegularList tasks={fiteredTodos} todo={Todo} />;
}

export default withToggle(Tasks);
