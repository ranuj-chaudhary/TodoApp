import { AddTask } from '../components/Tasks';
import { TodoHeader } from '../components/Todos/TodoHeader';
import { TodosContainer } from '../components/TodosContainer';

import { Outlet } from 'react-router';
export function Home() {
  return (
    <TodosContainer>
      <section>
        <TodoHeader />
        <Outlet />
      </section>
      <AddTask />
    </TodosContainer>
  );
}
