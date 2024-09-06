import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { findTotalTaskByList } from '../../utils/helper';

export function CustomListItem({ list, onSelectid, selectedId, listStyle }) {
  const { name, id, icon, url } = list;
  const { todos } = useSelector((state) => state.todo);
  const totalTask = findTotalTaskByList(name, todos);
  const type = name.replace(' ', '').toLowerCase();
 
  
  return (
    <Link to={`${url}?type=${type}`}>
      <li
        className={`${listStyle} ${
          selectedId === id ? 'bg-gray-100 border-l-cyan-600 border-l-2 ' : ''
        }`}
        onClick={() => onSelectid(id)}
      >
        <div className="flex gap-3 items-center">
          {icon} <span>{name}</span>
        </div>
        <div>
          <span>{totalTask !== 0 ? totalTask : ''}</span>
        </div>
      </li>
    </Link>
  );
}
