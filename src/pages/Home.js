import { AddTask, CompletedTasks, IncompleteTasks } from '../components/Tasks';
import { TodoHeader } from '../components/Todos/TodoHeader';
import { TodosContainer } from '../components/TodosContainer';
import { ThemeContextProvider } from '../context/useThemeContext';
import RenderWithToggle from '../shared/withToggle';

export function Home() {
  return (
    <ThemeContextProvider>
      <TodosContainer>
        <section>
          <TodoHeader />
          <RenderWithToggle
            ComponentToRender={IncompleteTasks}
            toggleName={'Incomplete_Tasks'}
          />
          <RenderWithToggle
            ComponentToRender={CompletedTasks}
            toggleName={'Complete_Tasks'}
          />
        </section>
        <AddTask />
      </TodosContainer>
    </ThemeContextProvider>
  );
}
