

export function ListItem({ list, onSelectid, selectedId, listStyle }) {
  const { name, id, icon, url } = list;
  return (
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
        <span>3</span>
      </div>
    </li>
  );
}
