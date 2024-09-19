import { useState } from 'react';

// ICONS
import { ListDownIcon, ListUpIcon } from '../icons/icons';

// STYLES
const withToggleStyle = {
  button:
    'flex items-center gap-2 bg-white bg-opacity-70  border-[2px]  hover:bg-white p-2  rounded-md m-2 shadow-md ',
};

export const withToggle = (ComponentToRender) => {
  function WithToggle(props) {
    const [toggle, setToggle] = useState(false);

    function handleToggle() {
      setToggle((toggle) => !toggle);
    }

    return (
      <div>
        <button
          onClick={handleToggle}
          className={`${withToggleStyle.button} ${
            toggle ? '  border-blue-400 bg-opacity-100' : 'border-transparent'
          } `}
        >
          <span>{props.toggleName}</span>
          {toggle ? <ListUpIcon /> : <ListDownIcon />}
        </button>

        {toggle && (
          <div className="list__container">
            <ComponentToRender {...props} />
          </div>
        )}
      </div>
    );
  }

  return WithToggle;
};
