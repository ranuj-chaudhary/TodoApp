import { useTheme } from '../context/useThemeContext';

const todoContainerStyle = {
  heading: 'text-center pb-8 text-2xl font-bold underline text-blue-800 ',
  container:
    ' w-4/5 overflow  transition-all ease-in duration-1000 h-4/5 scroll-smooth',
};

export const TodosContainer = ({ children }) => {
  const { currentTheme } = useTheme();

  return (
    <div className={`${todoContainerStyle.container} ${currentTheme.style} overflow-y-scroll`}>
      {children}
    </div>
  );
};
