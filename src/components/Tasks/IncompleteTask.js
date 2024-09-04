import { useSelector } from 'react-redux';
import { Todo } from '../Todos/Todo';
import { filterData } from '../../utils/helper';

export function IncompleteTasks() {
  const { todos, sortBy } = useSelector((state) => state.todo);
  const sortedData = filterData(todos, sortBy);
  const incomleteTasks = sortedData.filter(
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
