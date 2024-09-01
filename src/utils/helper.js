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
