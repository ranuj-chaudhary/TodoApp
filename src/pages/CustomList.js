import { CustomCompleteTask, CustomIncompleteTask } from '../components/Tasks';
import RenderWithToggle from '../shared/withToggle';

export function CustomList() {
  return (
    <div className="My day">
      <RenderWithToggle
        ComponentToRender={CustomIncompleteTask}
        listName={'Pending'}
      />
      <RenderWithToggle
        ComponentToRender={CustomCompleteTask}
        listName={'Done'}
      />
    </div>
  );
}
