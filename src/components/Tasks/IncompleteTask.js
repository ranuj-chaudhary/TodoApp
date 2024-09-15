import { useSelector } from 'react-redux';

// COMPONENTS
import { Todo } from '../Todos/Todo';

// SHARED COMPONENTS
import { withToggle } from '../../shared/withToggle';

// HELPERS
import { filterData } from '../../utils/helper';

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
    <ul className="incomplete_task flex flex-col gap-4 p-4">
      {todos &&
        todos.length > 0 &&
        incomleteTasks.map((task) => <Todo todo={task} key={task.id} />)}
    </ul>
  );
}

export default withToggle(IncompleteTasks);
