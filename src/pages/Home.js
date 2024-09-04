import { AddTask, CompletedTasks, IncompleteTasks } from '../components/Tasks';
import { TodoHeader } from '../components/Todos/TodoHeader';
import { TodosContainer } from '../components/TodosContainer';
import { ThemeContextProvider } from '../context/useThemeContext';
import RenderWithToggle from '../shared/withToggle';
import { Outlet } from 'react-router';
export function Home() {
  return (
    <ThemeContextProvider>
      <TodosContainer>
        <section>
          <TodoHeader />
          <Outlet />
          {/* <RenderWithToggle
            ComponentToRender={IncompleteTasks}
            listName={'Incomplete_Tasks'}
          />
          <RenderWithToggle
            ComponentToRender={CompletedTasks}
            listName={'Complete_Tasks'}
          /> */}
        </section>
        <AddTask />
      </TodosContainer>
    </ThemeContextProvider>
  );
}
