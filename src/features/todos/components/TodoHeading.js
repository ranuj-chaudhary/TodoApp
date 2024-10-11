import { useLocation } from 'react-router';

// helpers
import { removeSpaceFromString } from '../../../utils/helper';

// icons
import {
  HomeIcon,
  StarLineIcon,
  SunIcon,
  UnorderedListIcon,
} from '../../../components/ui';

const icons = {
  myday: <SunIcon className="text-black" size={24} />,
  important: <StarLineIcon className="text-black" size={24} />,
  task: <HomeIcon className="text-black" size={24} />,
  customlist: <UnorderedListIcon className="text-black" size={24} />,
};

export default function TodoHeading() {
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
