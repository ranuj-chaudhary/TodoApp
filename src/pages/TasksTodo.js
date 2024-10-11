import Tasks from '../components/Tasks/Tasks';
import { filterByCompleteTask, filterByIncompleteTask } from '../utils/helper';

export default function TasksTodo() {
  return (
    <div className="My day">
      <Tasks
        onFilterTask={(data) => {
          return filterByIncompleteTask(data);
        }}
        toggleName={'Incomplete'}
      />
      <Tasks
        onFilterTask={(data) => {
          return filterByCompleteTask(data);
        }}
        toggleName={'Completed'}
      />
     
    </div>
  );
}
