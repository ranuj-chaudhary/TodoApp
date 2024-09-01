// RE-USABLE COMPONENTS
import RenderWithToggle from './Todo_redux/shared/withToggle';

// COMPONENTS
import { TodosContainer } from './Todo_redux/components/TodosContainer';
import { Sidebar } from './Todo_redux/components/Sidebar';
import {
  IncompleteTasks,
  CompletedTasks,
  AddTask,
} from './Todo_redux/components/Tasks';

export default function TodoLayout() {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <TodosContainer>
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
    </div>
  );
}
