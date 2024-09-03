// RE-USABLE COMPONENTS

import { Sidebar } from './components/Sidebar/Sidebar';

import { MyDayTodo } from './pages/MyDayTodo';

export default function TodoLayout() {
  return (
    <div className="flex h-screen relative">
      <Sidebar />
      <MyDayTodo />
    </div>
  );
}
