import { useSelector } from 'react-redux';
import { Todo } from '../Todos/Todo';
import { filterData } from '../../utils/helper';
import { useLocation } from 'react-router';

export function IncompleteTasks() {
  const { todos, sortBy } = useSelector((state) => state.todo);
  const sortedData = filterData(todos, sortBy);

  // filter by list type by query pramas
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const listType = queryParams.get('type');

  // filter by incomplete task
  let incomleteTasks = sortedData.filter(
    (task) => task.taskCompleted === false
  );

  // IF QUERY PARAM TYPE EXIST FILTER DATA BY LIST TYPE
  if (listType?.length > 0) {
    incomleteTasks = incomleteTasks.filter((task) => task.category === listType);
  }

  return (
    <ul className="incomplete_task flex flex-col gap-4 p-4">
      {todos &&
        todos.length > 0 &&
        incomleteTasks.map((task) => <Todo todo={task} key={task.id} />)}
    </ul>
  );
}
