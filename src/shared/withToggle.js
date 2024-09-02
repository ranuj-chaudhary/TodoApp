import { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { useSelector } from 'react-redux';

export default function RenderWithToggle({
  ComponentToRender,
  toggleName,
}) {
  const [toggle, setToggle] = useState(false);
  const { todos } = useSelector((state) => state.todo);

  let totalTask = 0;
  if (toggleName === 'Complete_Tasks') {
    const totalCompleteTasks = todos.filter(
      (item) => item.taskCompleted === true
    );
    totalTask = totalCompleteTasks.length;
  } else if (toggleName === 'Incomplete_Tasks') {
    const totalIncompleteTasks = todos.filter(
      (item) => item.taskCompleted === false
    );
    totalTask = totalIncompleteTasks.length;
  }

  function handleToggle() {
    setToggle((toggle) => !toggle);
  }

  return (
    <div>
      <div className="">
        <button
          onClick={handleToggle}
          className="flex items-center gap-2 bg-white opacity-70 p-2 font-bold rounded-md m-2 shadow-md"
        >
          <span>{toggleName}</span>{' '}
          {totalTask > 0 && <span>({totalTask})</span>}
          {toggle ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>
      </div>

      <div className="list__container">
        {toggle && <ComponentToRender />}
      </div>
    </div>
  );
}
