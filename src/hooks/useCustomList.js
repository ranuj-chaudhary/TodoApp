import { useQueryParams } from './useQueryParams';
export function useCustomList() {
  const [listType] = useQueryParams();

  function handleCompleteTask(sortedData) {
    // FILTER BY COMPLETED TASKS
    let completedTasks = sortedData.filter(
      (task) => task.taskCompleted === true
    );

    // IF QUERY PARAM TYPE EXIST FILTER DATA BY LIST TYPE
    if (listType?.length > 0) {
      completedTasks = completedTasks.filter(
        (task) => task.category === listType
      );
    }
    return completedTasks;
  }

  function handleIncompleteTask(sortedData) {
    // FILTER BY COMPLETED TASKS
    let completedTasks = sortedData.filter(
      (task) => task.taskCompleted === false
    );

    // IF QUERY PARAM TYPE EXIST FILTER DATA BY LIST TYPE
    if (listType?.length > 0) {
      completedTasks = completedTasks.filter(
        (task) => task.category === listType
      );
    }
    return completedTasks;
  }

  return {
    handleCompleteTask,
    handleIncompleteTask,
  };
}
