import { createContext, useReducer } from 'react';
import { useContext } from 'react';

export const SET_THEME = 'SET_THEME';

// create context
const ImportantThemeContext = createContext();

const initialState = {
  themeColors: [
    {
      id: 0,
      color: 'Poppy',
      style: 'bg-gradient-to-r from-rose-400 to-red-500',
    },
    {
      id: 1,
      color: 'Gold',
      style: 'bg-gradient-to-r from-amber-200 to-yellow-500',
    },
    {
      id: 2,
      color: 'Holy',
      style: 'bg-gradient-to-r from-blue-200 to-cyan-200',
    },
    {
      id: 3,
      color: 'Powder',
      style: 'bg-gradient-to-r from-violet-200 to-pink-200',
    },
    {
      id: 4,
      color: 'LightGreen',
      style: 'bg-gradient-to-r from-lime-300 to-lime-200',
    },
  ],
  currentTheme: {
    id: 1,
    color: 'Gold',
    style: 'bg-gradient-to-r from-amber-200 to-yellow-500',
  },
};

function ImportantThemeContextProvider({ children }) {
  const [{ themeColors, currentTheme }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <ImportantThemeContext.Provider value={{ themeColors, currentTheme, dispatch }}>
      {children}
    </ImportantThemeContext.Provider>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case SET_THEME:
      const selectedTheme = state.themeColors.find(
        (theme) => theme.id === action.payload.id
      );

      return {
        ...state,
        currentTheme: {
          ...selectedTheme,
        },
      };
    default:
      return {
        ...state,
      };
  }
}

function useImportantTheme() {
  const context = useContext(ImportantThemeContext);
  //   if (context === undefined) return undefined;
  return context;
}

export { useImportantTheme, ImportantThemeContextProvider };
