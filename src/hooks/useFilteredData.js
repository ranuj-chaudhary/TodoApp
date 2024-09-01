// import { useSelector } from 'react-redux';
// export const useFilteredData = (sortBy) => {
//   const { todos } = useSelector((state) => state.todo);

//   let filteredData = [];
//   if (sortBy === 'Alphabetically') {
//     filteredData = todos((a, b) => a.content - b.content);
//   } else if (sortBy === 'Date') {
//     filteredData = todos((taskA, taskB) => {
//       const dateA = new Date(taskB.timeStamp);
//       const dateB = new Date(taskB.timeStamp);
//       return dateA - dateB;
//     });
//   } else if (sortBy === 'Importance') {
//     filteredData = todos((taskA, taskB) =>
//       taskA.urgentTask === taskB.urgentTask ? 0 : taskA.urgentTask ? -1 : 1
//     );
//   }

//   return filteredData;
// };
