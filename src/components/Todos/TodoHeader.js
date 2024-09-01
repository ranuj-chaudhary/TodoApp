import { getCurrentDate } from '../../utils/helper';

export const TodoHeader = function ({ children }) {
  const date = getCurrentDate();

  return (
    <header>
      <TodoHeading />
    </header>
  );
};

function TodoHeading() {
  return (
    <div className="presentDate">
      <h1>My Day</h1>
      <p>{date}</p>
    </div>
  );
}
function SortTodo() {
  return (
    <div className="sort__todo">
      <select name="" id="">
        <option value="">select to sort</option>
        <option value="">Alphabetically</option>
        <option value="">by date</option>
        <option value="">1</option>
        <option value="">1</option>
      </select>
    </div>
  );
}
