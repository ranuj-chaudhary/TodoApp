import { useState } from 'react';

// ICONS
import { ListDownIcon, ListUpIcon } from '../icons/icons';

// STYLES
const withToggleStyle = {
  button:
    'flex items-center gap-2 bg-white bg-opacity-70   p-2  rounded-md m-2 shadow-md ',
};

export const withToggle = (ComponentToRender) => {
  function WithToggle(props) {
    const [toggle, setToggle] = useState(true);

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
            <span>{props.toggleName}</span>
            {toggle ? <ListUpIcon /> : <ListDownIcon />}
          </button>
        </div>

        <div className="list__container">
          {toggle && <ComponentToRender {...props} />}
        </div>
      </div>
    );
  }

  return WithToggle;
};
