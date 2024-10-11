import Tasks from '../components/Tasks/Tasks';
import {
  filteredCompletedTodayTasks,
  filteredIncompletedTodayTasks,
} from '../utils/helper';

export default function MyDay() {
  return (
    <div className="My day">
      <Tasks
        toggleName="Incomplete"
        onFilterTask={(sortedData) => {
         
                  return filteredIncompletedTodayTasks(sortedData);
        }}
      />
      <Tasks
        toggleName="Completed"
        onFilterTask={(sortedData) => {
          return filteredCompletedTodayTasks(sortedData);
        }}
      />
    </div>
  );
}
