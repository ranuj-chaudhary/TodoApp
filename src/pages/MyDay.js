import RenderWithToggle from '../shared/withToggle';
import { TodayIncompleteTasks, TodayCompletedTasks } from '../components/Tasks';

export function MyDay() {
  return (
    <div className="My day">
      <RenderWithToggle
        ComponentToRender={TodayIncompleteTasks}
        listName={'Incompleted'}
      />
      <RenderWithToggle
        ComponentToRender={TodayCompletedTasks}
        listName={'Completed'}
      />
    </div>
  );
}
