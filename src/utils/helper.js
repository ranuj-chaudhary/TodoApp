import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
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
  const tasks = todos.map((task) => task);
  if (sortBy.length === 0) return tasks;
  let sortedData = [];
  if (sortBy === 'alphabetically') {
    sortedData = tasks.sort((a, b) => {
      if (a.content < b.content) {
        return -1;
      }
      if (a.content > b.content) {
        return 1;
      }
      return 0;
    });
  } else if (sortBy === 'date') {
    sortedData = tasks.sort((taskA, taskB) => {
      const dateA = new Date(taskA.timeStamp);
      const dateB = new Date(taskB.timeStamp);
      return dateA - dateB;
    });
  } else if (sortBy === 'importance') {
    sortedData = tasks.sort((taskA, taskB) =>
      taskA.urgentTask === taskB.urgentTask ? 0 : taskA.urgentTask ? -1 : 1
    );
  }
  return sortedData;
}

export function findTotalTaskByList(list, todos, listCategory) {
  let totalTask = 0;
  switch (list) {
    case 'Important':
      const totalImportantTasks = todos.filter(
        (item) => item.urgentTask === true && item.taskCompleted === false
      );
      const todayImportant = filteredIncompletedTodayTasks(totalImportantTasks);
      return todayImportant.length;
    case 'My day':
      const mydayIncompletedTasks = filteredIncompletedTodayTasks(todos);
      return mydayIncompletedTasks.length;
    case 'Task':
      const totalIncompleteTask = todos.filter(
        (item) => item.taskCompleted === false
      );
      return totalIncompleteTask.length;
    case 'CustomList':
      const customListLength = totalCustomList(listCategory, todos);
      return customListLength;
    default:
      return totalTask;
  }
}

// TASK HELPERS
export function filteredCompletedTodayTasks(todos) {
  const tasks = todos.map((todo) => todo);
  const data = tasks.filter((task) => {
    const date = new Date().toISOString();
    const today = getCurrentDateTime(date);
    const todoDate = getCurrentDateTime(task.timeStamp);
    return (
      today.presentDate === todoDate.presentDate && task.taskCompleted === true
    );
  });

  return data;
}

export function filteredIncompletedTodayTasks(todos) {
  const tasks = todos.map((todo) => todo);
  const data = tasks.filter((task) => {
    const date = new Date().toISOString();
    const today = getCurrentDateTime(date);
    const todoDate = getCurrentDateTime(task.timeStamp);
    return (
      today.presentDate === todoDate.presentDate && task.taskCompleted === false
    );
  });
  return data;
}

export function removeSpaceFromString(stringName) {
  return stringName.replace(' ', '');
}

export function totalCustomList(listCategory, todos) {
  const customList = todos.filter((todo) => todo.category === listCategory);
  return customList.length;
}

export function createList(listName) {
  let id = uuidv4();
  // input validation
  if (listName.length === 0) {
    listName = 'untitled list';
  } else if (listName.length > 30) {
    listName = listName.slice(0, 30);
  }

  const newList = {
    name: listName.toLowerCase().trim(),
    url: 'customlist',
    id,
  };
  return newList;
}

export function filterByCompleteTask(todos) {
  const tasks = todos.map((todo) => todo);
  const filteredTasks = tasks.filter((task) => task.taskCompleted === true);
  return filteredTasks;
}

export function filterByIncompleteTask(todos) {
  const tasks = todos.map((todo) => todo);
  const filteredTasks = tasks.filter((task) => task.taskCompleted === false);
  return filteredTasks;
}
