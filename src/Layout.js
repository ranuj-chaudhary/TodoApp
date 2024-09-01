// RE-USABLE COMPONENTS
import RenderWithToggle from './shared/withToggle';

// COMPONENTS
import { TodosContainer } from './components/TodosContainer';
import { Sidebar } from './components/Sidebar';
import { IncompleteTasks, CompletedTasks, AddTask } from './components/Tasks';
import { TodoHeader } from './components/Todos/TodoHeader';
import { ThemeContextProvider } from './context/useThemeContext';
export default function TodoLayout() {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <ThemeContextProvider>
        <TodosContainer>
          <TodoHeader />
          <RenderWithToggle
            ComponentToRender={IncompleteTasks}
            toggleName={'Incomplete Tasks'}
          />
          <RenderWithToggle
            ComponentToRender={CompletedTasks}
            toggleName={'Complete Tasks'}
          />
          <AddTask />
        </TodosContainer>
      </ThemeContextProvider>
    </div>
  );
}
