import { CustomCompleteTask, CustomIncompleteTask } from '../components/Tasks';

export function CustomList() {
  return (
    <div className="custom-list">
      <CustomIncompleteTask toggleName={'Pending'} />
      <CustomCompleteTask toggleName={'Done'} />
    </div>
  );
}
