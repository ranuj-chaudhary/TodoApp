import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

// helper functions
import { findTotalTaskByList } from '../utils/helper';

// icons
import { ListDownIcon, ListUpIcon } from '../icons/icons';

export default function RenderWithToggle({ ComponentToRender, listName }) {
  const [toggle, setToggle] = useState(false);
  const { todos } = useSelector((state) => state.todo);

  let totalTask = findTotalTaskByList(listName, todos);

  function handleToggle() {
    setToggle((toggle) => !toggle);
  }

  return (
    <div>
      <div className="">
        <button
          onClick={handleToggle}
          className="flex items-center gap-2 bg-white opacity-70 hover:opacity-85 transition-color duration-300 p-2  rounded-md m-2 shadow-md "
        >
          <span>{listName}</span> {totalTask > 0 && <span>({totalTask})</span>}
          {toggle ? <ListUpIcon /> : <ListDownIcon />}
        </button>
      </div>

      <div className="list__container">{toggle && <ComponentToRender />}</div>
    </div>
  );
}
