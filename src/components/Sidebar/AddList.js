import { useState } from 'react';
import { PlusIcon } from '../../icons/icons';
import { useDispatch } from 'react-redux';
import { addCustomList } from '../../reducers/reducers';
const addListStyle = {
  input:
    'border-2 border-gray-200  w-full rounded-md p-2 text-sm focus:outline-blue-400 focus:border-b-2 focus:border-blue',
};


export function AddList() {
  const [listName, setListName] = useState('');
  const dispatch = useDispatch();

  function handleListName(e) {
    setListName(e.target.value);
  }
  function handleAddList() {
    dispatch(addCustomList(listName));
  }

  function handleAddListOnEnter(e) {
    if (e.key === 'Enter') {
      dispatch(addCustomList(listName));
    }
  }
  return (
    <div className="absolute left-0 bottom-0 p-2 w-full ">
      <div className="addList relative">
        <input
          type="text"
          className={addListStyle.input}
          placeholder="New list"
          value={listName}
          onChange={handleListName}
          onKeyUp={handleAddListOnEnter}
        />
        <button
          className="absolute right-[3px] top-1/2 bg-blue-200 translate-y-[-50%]  p-2 rounded-e-md"
          onClick={handleAddList}
        >
          <PlusIcon size={18} />
        </button>
      </div>
    </div>
  );
}
