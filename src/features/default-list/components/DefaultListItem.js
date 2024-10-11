import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// helpers
import { findTotalTaskByList } from '../../../utils/helper';

// ui component
import { NotificationBubble } from '../../../components/ui';




export default function DefaultListItem({ list, onSelectid, selectedId, listStyle }) {
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
        <NotificationBubble
          totalTask={totalTask}
          backgroundColor="bg-blue-200"
        />
      </li>
    </Link>
  );
}
