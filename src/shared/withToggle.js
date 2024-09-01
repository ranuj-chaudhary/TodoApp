import { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

export default function RenderWithToggle({ ComponentToRender, toggleName }) {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle((toggle) => !toggle);
  }

  return (
    <div>
      <div className="">
        <button
          onClick={handleToggle}
          className="flex items-center gap-2 bg-green-400 p-2 font-bold rounded-md m-2"
        >
          <span>{toggleName}</span>{' '}
          {toggle ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>
      </div>

      <div className="list__container">{toggle && <ComponentToRender />}</div>
    </div>
  );
}
