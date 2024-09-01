import { useState } from 'react';
import { AiOutlineMore } from 'react-icons/ai';
import { useTheme } from '../../context/useThemeContext';
import { SET_THEME } from '../../context/useThemeContext';


export const TodoTheme = () => {
  const [toggle, setToggle] = useState(false);
  const { dispatch, themeColors, currentTheme } = useTheme();
  const [seletedTheme, setSelectedTheme] = useState(currentTheme.id);

  // HANDLERS
  function handleThemeChange(id) {
    dispatch({ type: SET_THEME, payload: { id } });
    setSelectedTheme(id);
  }
  return (
    <div className="todo__theme relative">
      <button
        className="bg-white opacity-60 p-3 border-0 rounded-md hover:opacity-85"
        onClick={() => setToggle((toggle) => !toggle)}
      >
        <AiOutlineMore size={18} />
      </button>
      {toggle && (
        <div className="absolute p-2 w-72 bg-white right-0 rounded-md mt-2 bg-opacity-90	">
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
