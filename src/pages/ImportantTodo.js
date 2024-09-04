import { ImportantTask } from '../components/Tasks/ImportantTask';
import RenderWithToggle from '../shared/withToggle';

export function ImportantTodo() {
  return (
    <div className="My day">
      <RenderWithToggle
        ComponentToRender={ImportantTask}
        listName={'Important'}
      />
    </div>
  );
}
