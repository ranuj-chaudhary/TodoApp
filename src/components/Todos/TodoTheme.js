import { useRef, useState } from 'react';
import { AiOutlineMore } from 'react-icons/ai';
import { useTheme } from '../../context/useThemeContext';
import { SET_THEME } from '../../context/useThemeContext';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const todoThemeStyle = {
  button:
    'bg-white opacity-80 hover:opacity-100 p-2.5 rounded-md transition-colors duration-200',
};
export const TodoTheme = () => {
  const [toggle, setToggle] = useState(false);
  const { dispatch, themeColors, currentTheme } = useTheme();
  const [seletedTheme, setSelectedTheme] = useState(currentTheme.id);
  const ref = useRef(null);

  // outside click toggle
  useOutsideClick(ref, () => setToggle(false));
  // HANDLERS
  function handleThemeChange(id) {
    dispatch({ type: SET_THEME, payload: { id } });
    setSelectedTheme(id);
  }

  function handleToggle(e) {
    e.stopPropagation();
    setToggle((toggle) => !toggle);
  }

  return (
    <div className="todo__theme relative">
      <button
        className={`${todoThemeStyle.button} ${
          toggle ? 'border-2 border-blue-400 opacity-100' : ''
        }`}
        onClick={handleToggle}
      >
        <AiOutlineMore size={18} />
      </button>
      {toggle && (
        <div
          ref={ref}
          className="absolute p-2 w-72 bg-white right-0 rounded-md mt-2	shadow-sm shadow-blue-400"
        >
          <p className="pt-2 pb-2 font-bold">Themes</p>
          <div className="theme_list">
            <ul className="flex flex-wrap gap-2">
              {themeColors &&
                themeColors.length > 0 &&
                themeColors.map((theme) => (
                  <li
                    key={theme.id}
                    className={`w-8 h-8 ${
                      seletedTheme === theme.id
                        ? 'border-2 border-blue-600'
                        : ''
                    } cursor-pointer ${theme.style}`}
                    onClick={() => handleThemeChange(theme.id)}
                  ></li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
