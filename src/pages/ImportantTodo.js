import { ImportantTask } from '../components/Tasks/ImportantTask';
import RenderWithToggle from '../shared/withToggle';

export function ImportantTodo() {
  return (
    <div className="My day">
      <RenderWithToggle
        ComponentToRender={ImportantTask}
        toggleName={'Important'}
      />
    </div>
  );
}
