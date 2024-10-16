import Tasks from '../components/Tasks/Tasks';
import { filteredIncompletedTodayTasks } from '../utils/helper';
export default function ImportantTodo() {
  return (
    <div className="My day">
      <Tasks
        toggleName={'Important'}
        onFilterTask={(sortedData) => {
          const urgentTask = sortedData.filter(
            (todo) => todo.urgentTask === true && todo.taskCompleted === false
          );
          const todayImportantTask = filteredIncompletedTodayTasks(urgentTask);
          return todayImportantTask;
        }}
      />
    </div>
  );
}
