import { useState } from 'react';
import { useSelector } from 'react-redux';

// helper functions
import { findTotalTaskByList } from '../utils/helper';

// icons
import { ListDownIcon, ListUpIcon } from '../icons/icons';
import { useLocation } from 'react-router';

// styles
const withToggleStyle = {
  button:
    'flex items-center gap-2 bg-white bg-opacity-70   p-2  rounded-md m-2 shadow-md ',
};
export default function RenderWithToggle({ ComponentToRender, toggleName }) {
  const [toggle, setToggle] = useState(true);
  const { todos } = useSelector((state) => state.todo);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const listType = queryParams.get('type');

  // get total by listname
  let totalTask = findTotalTaskByList(toggleName, todos, listType);

  function handleToggle() {
    setToggle((toggle) => !toggle);
  }

  return (
    <div>
      <div className="">
        <button
          onClick={handleToggle}
          className={`${withToggleStyle.button} ${
            toggle ? ' border-[2px] border-blue-400 bg-opacity-100' : ''
          }`}
        >
          <span>{toggleName}</span>{' '}
          {totalTask > 0 && <span>({totalTask})</span>}
          {toggle ? <ListUpIcon /> : <ListDownIcon />}
        </button>
      </div>

      <div className="list__container">{toggle && <ComponentToRender />}</div>
    </div>
  );
}
