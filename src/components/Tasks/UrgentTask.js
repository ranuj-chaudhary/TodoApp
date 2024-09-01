import { useSelector } from 'react-redux';
import { Todo } from '../Todos/Todo';

export function UrgentTask() {
  const { todos } = useSelector((state) => state.todo);
  const completedTasks = todos.filter((task) => task.taskCompleted === true);

  return (
    <ul className="complete_task flex flex-col gap-4 p-4">
      {completedTasks &&
        completedTasks.length > 0 &&
        completedTasks.map((task) => <Todo todo={task} key={task.id} />)}
    </ul>
  );
}
