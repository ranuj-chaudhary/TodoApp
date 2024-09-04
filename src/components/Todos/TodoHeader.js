import { getCurrentDate } from '../../utils/helper';
import { AiFillHome } from 'react-icons/ai';

import { TodoTheme } from './TodoTheme';
import { TodoSort } from './TodoSort';
import { useTheme } from '../../context/useThemeContext';

const headerStyle = {
  header:
    'pt-8 pb-4 pl-6 pr-12 text-black flex justify-between sticky top-0 z-50',
};

export function TodoHeader() {
  const { currentTheme } = useTheme();
  return (
    <header className={`${headerStyle.header} ${currentTheme.style}`}>
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
  return <div className="flex gap-2 items-center">{children}</div>;
}
