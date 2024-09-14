import RenderWithToggle from '../shared/withToggle';
import { TodayIncompleteTasks, TodayCompletedTasks } from '../components/Tasks';

export function MyDay() {
  return (
    <div className="My day">
      <RenderWithToggle
        ComponentToRender={TodayIncompleteTasks}
        toggleName={'Incompleted'}
      />
      <RenderWithToggle
        ComponentToRender={TodayCompletedTasks}
        toggleName={'Completed'}
      />
    </div>
  );
}
