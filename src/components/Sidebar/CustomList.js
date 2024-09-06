import { useSelector } from 'react-redux';
import { CustomListItem } from './CustomListItem';
const customListStyle = {
  list: 'mb-2 flex items-center justify-between p-[6px] hover:bg-gray-100 active:scale-95 transition-colors transition-transform duration-300 cursor-pointer ',
};

export function CustomList({ selectedId, onSelectid }) {
  const { customList } = useSelector((state) => state.todo);

  return (
    <div className="custom__list mt-2 overflow-y-auto h-2/5">
      <div className="list">
        {
          <ul>
            {customList.map((list, idx) => (
              <CustomListItem
                key={idx}
                list={list}
                onSelectid={onSelectid}
                selectedId={selectedId}
                listStyle={customListStyle.list}
              />
            ))}
          </ul>
        }
      </div>
    </div>
  );
}
