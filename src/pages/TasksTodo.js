import { CompletedTasks, IncompleteTasks } from '../components/Tasks';
import RenderWithToggle from '../shared/withToggle';

export function TasksTodo() {
  return (
    <div className="My day">
      <RenderWithToggle
        ComponentToRender={IncompleteTasks}
        listName={'Incomplete_Tasks'}
      />
      <RenderWithToggle
        ComponentToRender={CompletedTasks}
        listName={'Complete_Tasks'}
      />
    </div>
  );
}
