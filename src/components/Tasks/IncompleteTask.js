import { useSelector } from 'react-redux';
import { Todo } from '../Todos/Todo';

export function IncompleteTasks() {
  const { todos } = useSelector((state) => state.todo);
  const incomleteTasks = todos.filter((task) => task.taskCompleted === false);

  return (
    <ul className="incomplete_task flex flex-col gap-4 p-4">
      {todos &&
        todos.length > 0 &&
        incomleteTasks.map((task) => <Todo todo={task} key={task.id} />)}
    </ul>
  );
}
