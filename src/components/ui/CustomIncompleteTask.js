// import { useSelector } from 'react-redux';

// // COMPONENTS
// import { Todo } from '../Todos/Todo';

// // SHARED CONPONENTS
// import { withToggle } from '../../shared/withToggle';

// // CUSTOM HOOKS
// import { useQueryParams } from '../../hooks/useQueryParams';

// // HELPERS
// import { filterData } from '../../utils/helper';
// import RegularList from '../../shared/RegularList';

// function CustomIncompleteTask() {
//   const { todos, sortBy } = useSelector((state) => state.todo);
//   const sortedData = filterData(todos, sortBy);

//   // GET CURRENT LIST TYPE FROM QUERY PAPRAMS
//   const [listType] = useQueryParams();

//   // FILTER BY INCOMPLETE TASK
//   let incomleteTasks = sortedData.filter(
//     (task) => task.taskCompleted === false
//   );

//   // IF QUERY PARAM TYPE EXIST FILTER DATA BY LIST TYPE
//   if (listType?.length > 0) {
//     incomleteTasks = incomleteTasks.filter(
//       (task) => task.category === listType
//     );
//   }

//   return (
//     <RegularList tasks={incomleteTasks} todo={Todo} />
//   );
// }

// export default withToggle(CustomIncompleteTask);
