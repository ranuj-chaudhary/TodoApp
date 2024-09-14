import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { findTotalTaskByList } from '../../utils/helper';
import { NotificationBubble } from './NotificationBubble';
export function ListItem({ list, onSelectid, selectedId, listStyle }) {
  const { name, id, icon, url } = list;
  const { todos } = useSelector((state) => state.todo);
  const totalTask = findTotalTaskByList(name, todos);

  return (
    <Link to={`${url}?type=${name}&id=${id}`}>
      <li
        className={`${listStyle} ${
          selectedId === id ? 'bg-gray-100 border-l-cyan-600 border-l-2 ' : ''
        }`}
        onClick={() => onSelectid(id)}
      >
        <div className="flex gap-3 items-center">
          {icon} <span className="capitalize">{name}</span>
        </div>
        <NotificationBubble totalTask={totalTask} backgroundColor='bg-blue-200'/>
      </li>
    </Link>
  );
}
