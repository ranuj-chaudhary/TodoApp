import { useState } from 'react';
import { PlusIcon } from '../../icons/icons';
import { useDispatch } from 'react-redux';
import { addCustomList } from '../../reducers/reducers';
import { createList } from '../../utils/helper';

const addListStyle = {
  input:
    'border-2 border-gray-200  w-full rounded-s-md  p-2 text-sm focus:outline-blue-400 focus:border-b-2 focus:border-blue',
};

export function AddList() {
  const [listName, setListName] = useState('');

  const dispatch = useDispatch();

  function handleListName(e) {
    setListName(e.target.value);
  }

  function handleAddList(e) {
    const newList = createList(listName);
    dispatch(addCustomList(newList));
  }

  function handleAddListOnEnter(e) {
    if (e.key === 'Enter' && listName.length < 30) {
      const newList = createList(listName);
      dispatch(addCustomList(newList));
      setListName('');
    }
  }

  return (
    <div className="absolute left-0 bottom-0 p-2 w-full ">
      {listName.length > 30 && (
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
