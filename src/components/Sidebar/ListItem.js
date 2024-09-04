import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export function ListItem({ list, onSelectid, selectedId, listStyle }) {
  const { name, id, icon, url } = list;
  const { todos } = useSelector((state) => state.todo);

  return (
    <Link to={`${url}`}>
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
          <span>{1}</span>
        </div>
      </li>
    </Link>
  );
}
