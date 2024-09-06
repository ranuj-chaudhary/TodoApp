import { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';

// icons
import { SearchIcon } from '../../icons/icons';
import {
  ListUpIcon,
  ListDownIcon,
  SettingIcon,
  LogoutIcon,
} from '../../icons/icons';
import { useOutsideClick } from '../../hooks/useOutsideClick';

// styles
const profilteStyles = {
  searchIcon: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%) rotate(90deg)',
  },
  input:
    'border-2 border-gray-200 border-b-[1px] border-b-slate-500 w-full rounded-md p-[4px] text-sm focus:outline-blue-400 focus:border-b-2 focus:border-blue',
  li: 'p-2 flex items-center gap-2 hover:bg-gray-100 rounded-md',
};

export function Profile() {
  const { user, logout } = useAuth();
  const [toggle, setToggle] = useState(false);
  const ref = useRef(null);

  // outside click handler
  useOutsideClick(ref, () => setToggle(false));

  function handleToggle(e) {
    e.stopPropagation();
    setToggle((toggle) => !toggle);
  }
  function handleShowSettings(e) {
    e.stopPropagation();
  }
  function handleLogout(e) {
    e.stopPropagation();
    logout();
  }
  return (
    <section className="profile__detail">
      <div
        className="profile flex justify-evenly items-center hover:bg-gray-100 relative "
        onClick={handleToggle}
      >
        <div className="profile__image  py-2">
          <span className="flex items-center w-10 h-10 rounded-full bg-purple-500 justify-center text-white">
            RC
          </span>
        </div>
        <div className="profile__name   flex flex-col justify-center">
          <p className="">{user.name}</p>
          <p className=" text-xs text-gray-500">{user.email}</p>
        </div>
        <div className="toggle__icons">
          <ListUpIcon size={12} />
          <ListDownIcon size={12} />
        </div>
        {toggle && (
          <div
            ref={ref}
            className="toggle__menu absolute top-full left-0 z-50 w-full bg-white shadow-sm shadow-stone-400 p-2 mt-2 rounded-md "
          >
            <ul>
              <li className={profilteStyles.li} onClick={handleShowSettings}>
                <span>
                  <SettingIcon />
                </span>
                <span>Setting</span>
              </li>
              <li className={profilteStyles.li} onClick={handleLogout}>
                <span>
                  <LogoutIcon />
                </span>{' '}
                <span>Logout</span>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="search  py-2 relative">
        <input
          type="text"
          placeholder="Search"
          className={profilteStyles.input}
        />
        <SearchIcon style={profilteStyles.searchIcon} />
      </div>
    </section>
  );
}
