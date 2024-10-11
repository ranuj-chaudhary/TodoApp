// RE-USABLE COMPONENTS
import { Home } from './Home';
import { Sidebar } from './Sidebar';

export default function TodoLayout() {
  return (
    <div className="flex h-screen relative">
      <Sidebar />
      <Home />
    </div>
  );
}
