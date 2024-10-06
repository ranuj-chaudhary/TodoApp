import { TodayIncompleteTasks, TodayCompletedTasks } from '../components/Tasks';

export  function MyDay() {
  return (
    <div className="My day">
      <TodayIncompleteTasks toggleName={'Incompleted'} />
      <TodayCompletedTasks toggleName={'Completed'} />
    </div>
  );
}
