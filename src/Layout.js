// RE-USABLE COMPONENTS

import { Sidebar } from './components/Sidebar';

import { Home } from './pages/Home';

export default function TodoLayout() {
  return (
    <div className="flex h-screen relative">
      <Sidebar />
      <Home />
    </div>
  );
}
