import { CompletedTasks, IncompleteTasks } from '../components/Tasks';
import RenderWithToggle from '../shared/withToggle';

export function TasksTodo() {
  return (
    <div className="My day">
      <RenderWithToggle
        ComponentToRender={IncompleteTasks}
        listName={'Pending'}
      />
      <RenderWithToggle
        ComponentToRender={CompletedTasks}
        listName={'Done'}
      />
    </div>
  );
}
