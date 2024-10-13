import { useState } from 'react';
import { useDispatch } from 'react-redux';

// icons
import { PlusIcon } from '../../../components/ui';

// actions
import { addCustomList } from './customListSlice';

// styles
const addListStyle = {
  input:
    'border-2 border-gray-200  w-full rounded-s-md  p-2 text-sm focus:outline-blue-400 focus:border-b-2 focus:border-blue',
};

export default function AddList() {
  const [listName, setListName] = useState('');
  const dispatch = useDispatch();

  // Handlers
  function handleListName(e) {
    if (e.target.value.length <= 30) {
      setListName(e.target.value);
    }
  }

  function handleAddList() {
    if (listName.length < 30) {
      dispatch(addCustomList(listName));
      setListName('');
    }
  }

  function handleAddListOnEnter(e) {
    if (e.key === 'Enter' && listName.length < 30) {
      dispatch(addCustomList(listName));
      setListName('');
    }
  }

  return (
    <div className="p-2 w-full absolute bottom-4">
      {listName.length === 30 && (
        <p className="red p-2 text-red-600">List name exceeds permited limit</p>
      )}
      <div className="addList relative flex gap-[2px]">
        <input
          type="text"
          className={addListStyle.input}
          placeholder="New list"
          value={listName}
          onChange={handleListName}
          onKeyUp={handleAddListOnEnter}
        />
        <button
          className=" right-[3px]  bg-blue-200   p-2 rounded-e-md"
          onClick={handleAddList}
        >
          <PlusIcon size={18} />
        </button>
      </div>
    </div>
  );
}
