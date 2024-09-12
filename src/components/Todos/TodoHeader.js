import { TodoTheme } from './TodoTheme';
import { TodoSort } from './TodoSort';
import { useTheme } from '../../context/useThemeContext';
import { useLocation } from 'react-router';

import {
  HomeIcon,
  StarLineIcon,
  SunIcon,
  UnorderedListIcon,
} from '../../icons/icons';
import { removeSpaceFromString } from '../../utils/helper';

const headerStyle = {
  header:
    'pt-8 pb-4 pl-6 pr-12 text-black flex justify-between sticky top-0 z-50',
};

const icons = {
  myday: <SunIcon className="text-black" size={24} />,
  important: <StarLineIcon className="text-black" size={24} />,
  task: <HomeIcon className="text-black" size={24} />,
  customlist: <UnorderedListIcon className="text-black" size={24} />,
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
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const listType = queryParams.get('type');
  const listName = removeSpaceFromString(listType.toLowerCase());
  return (
    <div className="presentDate flex gap-2 font-bold items-center">
      <button>{icons[listName] ? icons[listName] : icons.customlist}</button>
      <div>
        <h1 className="text-lg capitalize">{listType}</h1>
      </div>
    </div>
  );
}

function TodoFeauture({ children }) {
  return <div className="flex gap-2 items-center">{children}</div>;
}
