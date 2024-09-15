import moment from 'moment';

export function getCurrentDateTime(date) {
  const now = moment(date);
  const currentDate = String(now.date());
  const month = String(now.month() + 1);
  const year = String(now.year());
  const hour = String(now.hour());
  const seconds = String(now.second());

  const presentDate = `${currentDate.padStart(2, 0)}/${month.padStart(
    2,
    0
  )}/${year}`;
  const meridian = hour >= 12 ? 'PM' : 'AM';
  const presentTime = `${hour.padStart(2, 0)}:${seconds.padStart(
    2,
    0
  )} ${meridian}`;

  return {
    presentDate,
    presentTime,
  };
}

export function getCurrentDate() {
  const date = new Date();

  return date.toDateString();
}

export function filterData(todos, sortBy = '') {
  if (sortBy.length === 0) return todos;
  let filteredData = [];
  if (sortBy === 'alphabetically') {
    filteredData = todos.sort((a, b) => {
      if (a.content < b.content) {
        return -1;
      }
      if (a.content > b.content) {
        return 1;
      }
      return 0;
    });
  } else if (sortBy === 'date') {
    filteredData = todos.sort((taskA, taskB) => {
      const dateA = new Date(taskA.timeStamp);
      const dateB = new Date(taskB.timeStamp);
      return dateA - dateB;
    });
  } else if (sortBy === 'importance') {
    filteredData = todos.sort((taskA, taskB) =>
      taskA.urgentTask === taskB.urgentTask ? 0 : taskA.urgentTask ? -1 : 1
    );
  }
  return filteredData;
}

export function findTotalTaskByList(list, todos, listCategory) {
  let totalTask = 0;
  switch (list) {
    case 'Done':
      const totalCompleteTasksByCategory = todos.filter((item) => {
        return item.taskCompleted === true && item.category === listCategory;
      });
      return totalCompleteTasksByCategory.length;
    case 'Pending':
      const totalIncompleteTasksByCategory = todos.filter((item) => {
        return item.taskCompleted === false && item.category === listCategory;
      });
      return totalIncompleteTasksByCategory.length;
    case 'Important':
      const totalImportantTasks = todos.filter(
        (item) => item.urgentTask === true
      );
      return totalImportantTasks.length;
    case 'Completed':
      const TotalTodayCompletedTasks = filteredCompletedTodayTasks(todos);
      return TotalTodayCompletedTasks.length;
    case 'Incompleted':
      const TotalTodayIncompletedTasks = filteredIncompletedTodayTasks(todos);
      return TotalTodayIncompletedTasks.length;
    case 'TotalTask':
      const todayCompletedTasks = filteredCompletedTodayTasks(todos);
      const todayIncompletedTasks = filteredIncompletedTodayTasks(todos);
      return todayCompletedTasks.length + todayIncompletedTasks.length;
    case 'My day':
      const mydayCompletedTasks = filteredCompletedTodayTasks(todos);
      const mydayIncompletedTasks = filteredIncompletedTodayTasks(todos);
      return mydayCompletedTasks.length + mydayIncompletedTasks.length;
    case 'Task':
      return todos.length;
    case 'CustomList':
      const customListLength = totalCustomList(listCategory, todos);
      return customListLength;
    default:
      return totalTask;
  }
}

// TASK HELPERS
export function filteredCompletedTodayTasks(data) {
  return data.filter((task) => {
    const date = new Date().toISOString();
    const today = getCurrentDateTime(date);
    const todoDate = getCurrentDateTime(task.timeStamp);

    return (
      today.presentDate === todoDate.presentDate && task.taskCompleted === true
    );
  });
}

export function filteredIncompletedTodayTasks(data) {
  return data.filter((task) => {
    const date = new Date().toISOString();
    const today = getCurrentDateTime(date);
    const todoDate = getCurrentDateTime(task.timeStamp);
    return (
      today.presentDate === todoDate.presentDate && task.taskCompleted === false
    );
  });
}

export function removeSpaceFromString(stringName) {
  return stringName.replace(' ', '');
}

export function totalCustomList(listCategory, todos) {
  const customList = todos.filter((todo) => todo.category === listCategory);
  return customList.length;
}
