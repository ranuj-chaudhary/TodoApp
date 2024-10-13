import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// from custom list slice
import { deleteCustomList } from './customListSlice';

//helpers
import { removeSpaceFromString } from '../../../utils/helper';
import { findTotalTaskByList } from '../../../utils/helper';
//icons
import { DeleteIcon, UnorderedListIcon } from '../../../components/ui';

// reusable component
import { NotificationBubble } from '../../../components/ui';

// Component
export default function CustomListItem({
  list,
  onSelectid,
  selectedId,
  listStyle,
}) {
  // global state
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  // local state
  const { name, id, url } = list;

  // derived values
  const totalTask = findTotalTaskByList('CustomList', todos, name);
  const type = removeSpaceFromString(name);

  // handlers
  function handleCustomListDelete(id) {
    console.log(id)
    dispatch(deleteCustomList(id));
  }
  return (
    <Link to={`${url}?type=${type}`}>
      <li
        className={`${listStyle} ${
          selectedId === id ? 'bg-gray-100 border-l-cyan-600 border-l-2 ' : ''
        }`}
        onClick={() => onSelectid(id)}
      >
        <div className="flex gap-3 items-center w-full ">
          <UnorderedListIcon className="text-blue-300" />
          <span className="flex-grow flex justify-between">
            <span className="capitalize">{name}</span>
            <span>
              <DeleteIcon
                color={'#333333'}
                size={20}
                onClick={(e) => handleCustomListDelete(id)}
              />
            </span>
          </span>
        </div>
        <div>
          <NotificationBubble
            totalTask={totalTask}
            backgroundColor="bg-red-200"
          />
        </div>
      </li>
    </Link>
  );
}
