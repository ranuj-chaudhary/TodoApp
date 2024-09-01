import { useEffect, useMemo, useState } from 'react';
import { sortTodo } from '../../reducers/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { filterData } from '../../utils/helper';

export const TodoSort = function TodoSort() {
  const [sortBy, setSortBy] = useState('');
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const filteredTodos = useMemo(() => {
    return filterData(todos, sortBy);
  }, [sortBy, todos]);

  
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
          <option value="alphabetically">Alphabetically</option>
          <option value="date">By Date</option>
          <option value="importance">Importance</option>
        </select>
      </div>
    </div>
  );
};
