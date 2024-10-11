import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//helpers
import { findTotalTaskByList } from '../../utils/helper';
import { removeSpaceFromString } from '../../utils/helper';

//icons
import { DeleteIcon, UnorderedListIcon } from '../../icons/icons';

// reusable component
import { NotificationBubble } from './NotificationBubble';

export function CustomListItem({ list, onSelectid, selectedId, listStyle }) {
  // global state
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  // local state
  const { name, id, url } = list;

  // navigate
  const navigate = useNavigate();
  // derived values
  const totalTask = findTotalTaskByList('CustomList', todos, name);
  const type = removeSpaceFromString(name);

  function handleListDelete(id) {
    // dispatch(deleteCustomList(id, name));
    navigate('/app');
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
            <span
              onClick={(e) => {
                e.stopPropagation()
                handleListDelete(id);
              }}
            >
              <DeleteIcon color={'#333333'} size={20} />
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
