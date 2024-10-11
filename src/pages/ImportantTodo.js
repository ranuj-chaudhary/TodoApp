import Tasks from '../components/Tasks/Tasks';

export default function ImportantTodo() {
  return (
    <div className="My day">
      <Tasks
        toggleName={'Important'}
        onFilterTask={(sortedData) => {
          const urgentTask = sortedData.filter(
            (todo) => todo.urgentTask === true && todo.taskCompleted === false
          );
          return urgentTask;
        }}
      />
    </div>
  );
}
