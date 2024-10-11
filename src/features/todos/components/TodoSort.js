import { sortTodo } from './todoSlice';
import { useDispatch } from 'react-redux';

export default function TodoSort() {
  const dispatch = useDispatch();

  function handleSortBy(e) {
    const sortBy = e.target.value;

    dispatch(sortTodo(sortBy));
  }

  return (
    <div className="sort__todo">
      <div className="sort__options">
        <select
          name=""
          onChange={handleSortBy}
          id=""
          className="p-2 bg-white  focus:opacity-90 transition-colors duration-300 cursor-pointer rounded-md outline-blue-400"
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
