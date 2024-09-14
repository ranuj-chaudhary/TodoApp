import { CompletedTasks, IncompleteTasks } from '../components/Tasks';
import RenderWithToggle from '../shared/withToggle';

export function TasksTodo() {
  return (
    <div className="My day">
      <RenderWithToggle
        ComponentToRender={IncompleteTasks}
        toggleName={'Pending'}
      />
      <RenderWithToggle
        ComponentToRender={CompletedTasks}
        toggleName={'Done'}
      />
    </div>
  );
}
