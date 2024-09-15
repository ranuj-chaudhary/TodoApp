import { useSelector } from 'react-redux';

// COMPONENTS
import { Todo } from '../Todos/Todo';

// SHARED CONPONENTS
import { withToggle } from '../../shared/withToggle';

// CUSTOM HOOKS
import { useQueryParams } from '../../hooks/useQueryParams';

// HELPERS
import { filterData } from '../../utils/helper';

function CustomIncompleteTask() {
  const { todos, sortBy } = useSelector((state) => state.todo);
  const sortedData = filterData(todos, sortBy);

  // GET CURRENT LIST TYPE FROM QUERY PAPRAMS
  const [listType] = useQueryParams();

  // FILTER BY INCOMPLETE TASK
  let incomleteTasks = sortedData.filter(
    (task) => task.taskCompleted === false
  );

  // IF QUERY PARAM TYPE EXIST FILTER DATA BY LIST TYPE
  if (listType?.length > 0) {
    incomleteTasks = incomleteTasks.filter(
      (task) => task.category === listType
    );
  }

  return (
    <ul className="incomplete_task flex flex-col gap-4 p-4">
      {todos &&
        todos.length > 0 &&
        incomleteTasks.map((task) => <Todo todo={task} key={task.id} />)}
    </ul>
  );
}

export default withToggle(CustomIncompleteTask);
