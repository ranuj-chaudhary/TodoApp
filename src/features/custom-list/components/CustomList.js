import { useDispatch, useSelector } from 'react-redux';

// Icons UI
import { AddButton } from '../../../components/ui/Buttons';
// Actions
import { addCustomList } from './customListSlice';

// Components
import AddList from './AddList';
import CustomListItem from './CustomListItem';

// Styles
const customListStyle = {
  list: 'mb-2 flex items-center justify-between p-[6px] hover:bg-gray-100 active:scale-95 transition-colors transition-transform duration-300 cursor-pointer ',
};

export default function CustomList({ selectedId, onSelectid }) {
  const { customList } = useSelector((state) => state.customList);
  const dispatch = useDispatch();

  function handleAddUntitleCustomList() {
    dispatch(addCustomList(''));
  }
  return (
    <section className="custom__list mt-6 flex flex-col justify-between flex-1 h-2/5 relative">
      <div className="overflow-x-scroll w-full h-full">
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
        {customList.length === 0 && (
          <AddButton onClick={handleAddUntitleCustomList} />
        )}
      </div>
      <AddList />
    </section>
  );
}
