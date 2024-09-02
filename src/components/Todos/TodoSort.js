import { sortTodo } from '../../reducers/reducers';
import { useDispatch } from 'react-redux';

export const TodoSort = function TodoSort() {
  const dispatch = useDispatch();

  function handleSortBy(e) {
    const sortBy = e.target.value;

    dispatch(sortTodo(sortBy));
  }

  return (
    <div className="sort__todo">
      <div className="sort__options">
        <select name="" onChange={handleSortBy} id="" className="p-2">
          <option value="">select to sort</option>
          <option value="alphabetically">Alphabetically</option>
          <option value="date">By Date</option>
          <option value="importance">Importance</option>
        </select>
      </div>
    </div>
  );
};
