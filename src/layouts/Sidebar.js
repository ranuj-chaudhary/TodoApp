import { useState } from 'react';

// components
// import { Profile } from './Profile';
// import { DefaultList } from './DefaultList';
// import { AddList } from './AddList';
// import { CustomList } from './CustomList';
import { Profile } from '../features/profile';
import { DefaultList } from '../features/default-list';
import { CustomList } from '../features/custom-list';

export const Sidebar = () => {
  const [selectedId, setSelectedId] = useState(1);
  function handleSelectId(id) {
    setSelectedId(id);
  }
  return (
    <div className="side_bar w-1/5 px-4 pt-4 relative flex flex-col h-screen">
      <Profile />
      <DefaultList selectedId={selectedId} onSelectid={handleSelectId} />
      <CustomList selectedId={selectedId} onSelectid={handleSelectId} />
    </div>
  );
};
