import { useDispatch, useSelector } from 'react-redux';
import { CustomListItem } from './CustomListItem';
import { PlusIcon } from '../../icons/icons';
import { addCustomList } from '../../reducers/reducers';
import { createList } from '../../utils/helper';
// styles
const customListStyle = {
  list: 'mb-2 flex items-center justify-between p-[6px] hover:bg-gray-100 active:scale-95 transition-colors transition-transform duration-300 cursor-pointer ',
};

function CustomList({ selectedId, onSelectid }) {
  const { customList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  function handleAddCustomList() {
      const newList = createList('')
       dispatch(addCustomList(newList));
  }
  return (
    <div className="custom__list mt-6 h-2/5 overflow">
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
            {customList.length === 0 && (
              <li>
                <div className=" flex items-center justify-center">
                  <button
                    className="flex w-32 gap-2 rounded-md bg-blue-200 p-2 bg-opacity-70"
                    onClick={handleAddCustomList}
                  >
                    <span>
                      <PlusIcon size={24} />
                    </span>
                    Add list
                  </button>
                </div>
              </li>
            )}
          </ul>
        }
      </div>
    </div>
  );
}
