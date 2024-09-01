import { useState } from 'react';

function RandomComponent() {
  return <p className="text-red">This is random content</p>;
}

export const CustomTabs = () => {
  const tabs = [
    {
      label: 'Tab 1',
      content: <div>This is content for Tab 1</div>,
      backgroundColor: 'red',
    },
    {
      label: 'Tab 2',
      content: <div>This is content for Tab 2</div>,
      backgroundColor: 'yellow',
    },
    {
      label: 'Tab 3',
      content: <RandomComponent />,
      backgroundColor: 'green',
    },
  ];

  function handleChange(getCurrentTabIndex) {
    console.log(getCurrentTabIndex);
  }

  return (
    <div className="tab__container">
      {' '}
      <TabContent tabs={tabs} onChange={handleChange} />
    </div>
  );
};

function TabContent({ tabs, onChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleCurrentIndex(getCurrentIndex) {
    setCurrentIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }
  return (
    <div className="tab__content">
      <div className="flex gap-4 font-bold ">
        {tabs.map((tab, idx) => (
          <p
            className="border-black border-2 p-2"
            key={tab.label}
            onClick={() => handleCurrentIndex(idx)}
          >
            {tab.label}
          </p>
        ))}
      </div>
      <div>{tabs[currentIndex] && tabs[currentIndex].content}</div>
    </div>
  );
}
