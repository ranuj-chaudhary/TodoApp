// context
import { useTheme } from '../../../context/useThemeContext';

// components
import TodoTheme from './TodoTheme';
import TodoSort from './TodoSort';
import TodoHeading from './TodoHeading';

// styles
const headerStyle = {
  header:
    'pt-8 pb-4 pl-6 pr-12 text-black flex justify-between sticky top-0 z-50',
};

export default function TodoHeader() {
  const { currentTheme } = useTheme();
  return (
    <header className={`${headerStyle.header} ${currentTheme.style}`}>
      <TodoHeading />
      <div className="flex gap-2 items-center">
        <TodoSort />
        <TodoTheme />
      </div>
    </header>
  );
}
