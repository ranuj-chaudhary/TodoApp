import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCustomList } from '../../reducers/reducers';
//helpers
import { findTotalTaskByList } from '../../utils/helper';
import { removeSpaceFromString } from '../../utils/helper';

//icons
import { DeleteIcon, UnorderedListIcon } from '../../icons/icons';

export function CustomListItem({ list, onSelectid, selectedId, listStyle }) {
  // global state
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  // local state
  const { name, id, url } = list;

  // derived values
  const totalTask = findTotalTaskByList(name, todos);
  const type = removeSpaceFromString(name);

  function handleListDelete(id) {
    dispatch(deleteCustomList(id, name));
  }
  return (
    <Link to={`${url}?type=${type}`}>
      <li
        className={`${listStyle} ${
          selectedId === id ? 'bg-gray-100 border-l-cyan-600 border-l-2 ' : ''
        }`}
        onClick={() => onSelectid(id)}
      >
        <div className="flex gap-3 items-center w-full">
          <UnorderedListIcon className="text-blue-300" />
          <span className="flex-grow flex justify-between">
            <span className="capitalize">{name}</span>
            <span>
              <DeleteIcon
                color={'#333333'}
                size={20}
                onClick={() => handleListDelete(id)}
              />
            </span>
          </span>
        </div>
        <div>
          <span>{totalTask !== 0 ? totalTask : ''}</span>
        </div>
      </li>
    </Link>
  );
}
