import { Outlet } from 'react-router';

import { TodoHeader, AddTodo } from '../features/todos';
import { useTheme } from '../context/useThemeContext';

const HomeStyle = {
  heading: 'text-center pb-8 text-2xl font-bold underline text-blue-800 ',
  container:
    ' w-4/5 overflow  transition-all ease-in duration-1000 h-4/5 scroll-smooth',
};

export function Home() {
  const { currentTheme } = useTheme();
  return (
    <div
      className={`${HomeStyle.container} ${currentTheme.style} overflow-y-scroll`}
    >
      <section>
        <TodoHeader />
        <Outlet />
      </section>
      <AddTodo />
    </div>
  );
}
