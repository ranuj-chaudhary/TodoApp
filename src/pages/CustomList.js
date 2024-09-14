import { CustomCompleteTask, CustomIncompleteTask } from '../components/Tasks';
import RenderWithToggle from '../shared/withToggle';

export function CustomList() {
  return (
    <div className="custom-list">
      <RenderWithToggle
        ComponentToRender={CustomIncompleteTask}
        toggleName={'Pending'}
      />
      <RenderWithToggle
        ComponentToRender={CustomCompleteTask}
        toggleName={'Done'}
      />
    </div>
  );
}
