import { CompletedTasks, IncompleteTasks } from '../components/Tasks';

export function TasksTodo() {
  return (
    <div className="My day">
      <IncompleteTasks
        toggleName={'Pending'}
      />
      <CompletedTasks
        toggleName={'Done'}
      />
    </div>
  );
}
