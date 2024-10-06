import { useSelector } from 'react-redux';
import { useMemo } from 'react';

// COMPONENTS
import { Todo } from '../Todos/Todo';
import { filterData } from '../../utils/helper';

// SHARED COMPONENTS
import { withToggle } from '../../shared/withToggle';

// CUSTOM HOOKS
import { useQueryParams } from '../../hooks/useQueryParams';
import RegularList from '../../shared/RegularList';

function CustomCompleteTask() {
  // REDUX STORE
  const { todos, sortBy } = useSelector((state) => state.todo);

  // GET CURRENT LIST TYPE FROM QUERY PARAMS
  const [listType] = useQueryParams();

  // SORT BY SELECTED DATA
  const sortedData = useMemo(() => filterData(todos, sortBy), [todos, sortBy]);

  // FILTER BY COMPLETED TASKS
  let completedTasks = sortedData.filter((task) => task.taskCompleted === true);

  // IF QUERY PARAM TYPE EXIST FILTER DATA BY LIST TYPE
  if (listType?.length > 0) {
    completedTasks = completedTasks.filter(
      (task) => task.category === listType
    );
  }

  return (
    <RegularList tasks={completedTasks} todo={Todo} />
  );
}

export default withToggle(CustomCompleteTask);
