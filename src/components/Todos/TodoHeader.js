import { getCurrentDate } from '../../utils/helper';
import { AiFillHome } from 'react-icons/ai';

import { TodoTheme } from './TodoTheme';
import { TodoSort } from './TodoSort';

export function TodoHeader() {
  return (
    <header className="pt-4 pb-4 pl-6 pr-12  text-black flex justify-between">
      <TodoHeading />
      <TodoFeauture>
        <TodoSort />
        <TodoTheme />
      </TodoFeauture>
    </header>
  );
}

function TodoHeading() {
  const date = getCurrentDate();

  return (
    <div className="presentDate flex gap-4 font-bold">
      <button>
        <AiFillHome size={24} />
      </button>
      <div>
        <h1>My Day</h1>
        <p>{date}</p>
      </div>
    </div>
  );
}

function TodoFeauture({ children }) {
  return <div className="flex gap-4">{children}</div>;
}
