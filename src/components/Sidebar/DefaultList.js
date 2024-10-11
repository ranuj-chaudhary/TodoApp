import { ListItem } from './DefaultListItem';
import { useSelector } from 'react-redux';

const defaultListStyle = {
  list: 'mb-2 flex items-center justify-between p-[6px] hover:bg-gray-100 active:scale-95 transition-colors transition-transform duration-300 cursor-pointer ',
};

export function DefaultList({ selectedId, onSelectid }) {
  const { defaultList } = useSelector((state) => state.todo);

  return (
    <section className="default__list py-2 border-b-gray-200 border-b-[1px] ">
      <ul>
        {defaultList.map((list, idx) => (
          <ListItem
            key={idx}
            list={list}
            onSelectid={onSelectid}
            selectedId={selectedId}
            listStyle={defaultListStyle.list}
          />
        ))}
      </ul>
    </section>
  );
}
