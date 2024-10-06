import { Profile } from './Profile';
import { DefaultList } from './DefaultList';
import { useState } from 'react';
import { AddList } from './AddList';
import { CustomList } from './CustomList';

export const Sidebar = () => {
  const [selectedId, setSelectedId] = useState(1);
  function handleSelectId(id) {
    setSelectedId(id);
  }
  return (
    <div className="side_bar w-1/5 px-4 pt-4 relative">
      <Profile />
      <DefaultList selectedId={selectedId} onSelectid={handleSelectId} />
      <CustomList selectedId={selectedId} onSelectid={handleSelectId} />
      <AddList />
    </div>
  );
};


