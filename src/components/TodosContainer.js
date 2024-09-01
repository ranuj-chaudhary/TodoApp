import { useTheme } from '../context/useThemeContext';

const todoContainerStyle = {
  heading: 'text-center pb-8 text-2xl font-bold underline text-blue-800 ',
  container:
    'h-full w-full flex-grow overflow-auto relative transition-all ease-in duration-1000',
};

export const TodosContainer = ({ children }) => {
  const { currentTheme } = useTheme();
  return (
    <div className={`${todoContainerStyle.container} ${currentTheme.style}  `}>
      {children}
    </div>
  );
};
