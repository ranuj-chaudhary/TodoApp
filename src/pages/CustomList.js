import Tasks from '../components/Tasks/Tasks';
import {useCustomList} from '../hooks/useCustomList';

export default function CustomList() {
  const {
    handleCompleteTask,
    handleIncompleteTask,
  } = useCustomList()
  

  return (
    <div className="custom-list">
      <Tasks toggleName="Incomplete" onFilterTask={handleIncompleteTask} />
      <Tasks toggleName="Completed" onFilterTask={handleCompleteTask} />
    </div>
  );
}
