import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

export const TodoSort = function TodoSort() {
  const [sortBy, setSortBy] = useState('');
  const { todos } = useSelector((state) => state.todo);

  const filteredTodos = useMemo(
    () => filterData(sortBy, todos),
    [sortBy, todos]
  );

  console.log(filteredTodos);

  function filterData(sortBy, todos) {
    let filteredData = [];
    if (sortBy === 'Alphabetically') {
      filteredData = todos((a, b) => a.content - b.content);
    } else if (sortBy === 'Date') {
      filteredData = todos((taskA, taskB) => {
        const dateA = new Date(taskA.timeStamp);
        const dateB = new Date(taskB.timeStamp);
        return dateA - dateB;
      });
    } else if (sortBy === 'Importance') {
      filteredData = todos((taskA, taskB) =>
        taskA.urgentTask === taskB.urgentTask ? 0 : taskA.urgentTask ? -1 : 1
      );
    }
    return filteredData;
  }

  function handleSortBy(e) {
    setSortBy(e.target.value);
  }

  return (
    <div className="sort__todo">
      <div className="sort__options">
        <select
          name=""
          value={sortBy}
          onChange={handleSortBy}
          id=""
          className="p-2"
        >
          <option value="">select to sort</option>
          <option value="Alphabetically">Alphabetically</option>
          <option value="By-Date">By Date</option>
          <option value="Importance">Importance</option>
        </select>
      </div>
    </div>
  );
};
