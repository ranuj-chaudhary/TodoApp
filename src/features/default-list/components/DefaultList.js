import { useSelector } from 'react-redux';
import DefaultListItem from './DefaultListItem';


const defaultListStyle = {
  list: 'mb-2 flex items-center justify-between p-[6px] hover:bg-gray-100 active:scale-95 transition-colors transition-transform duration-300 cursor-pointer ',
};


export default function DefaultList({ selectedId, onSelectid }) {
  const { defaultList } = useSelector((state) => state.user);

  return (
    <section className="default__list py-2 border-b-gray-200 border-b-[1px] ">
      <ul>
        {defaultList.map((list, idx) => (
          <DefaultListItem
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
