import { AddTask, CompletedTasks, IncompleteTasks } from '../components/Tasks';
import { TodoHeader } from '../components/Todos/TodoHeader';
import { TodosContainer } from '../components/TodosContainer';
import { ThemeContextProvider } from '../context/useThemeContext';

import { Outlet } from 'react-router';
export function Home() {
  return (
    <ThemeContextProvider>
      <TodosContainer>
        <section>
          <TodoHeader />
          <Outlet />
        </section>
        <AddTask />
      </TodosContainer>
    </ThemeContextProvider>
  );
}
