const todoContainerStyle = {
  heading: 'text-center pb-8 text-2xl font-bold underline text-blue-800',
  container:
    'h-full w-full  flex-grow bg-green-600 opacity-80 overflow-auto relative',
};

export const TodosContainer = ({ children }) => {
  return <div className={todoContainerStyle.container}>{children}</div>;
};
