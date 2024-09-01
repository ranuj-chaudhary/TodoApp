import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import data from "./data";
export function Accordion() {
  const [singleSelectedId, setSingleSelectedId] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);

  function handleSingleSelectedId(getSelectId) {
    setSingleSelectedId(singleSelectedId === getSelectId ? null : getSelectId);
  }

  return (
    <div className="w-96">
      {data.map((item) => (
        <AccordionContent
          item={item}
          onSingleSelectedId={handleSingleSelectedId}
          selectedId={singleSelectedId}
          key={item.id}
        />
      ))}
    </div>
  );
}

function AccordionContent({ item, onSingleSelectedId, selectedId }) {
  return (
    <div className="content_togller ">
      <div className="flex justify-between border-black border-2 align-middle">
        <h1 className="font-bold">
          Q{item.id}.{item.question}
        </h1>
        <button onClick={() => onSingleSelectedId(item.id)}>
          {selectedId === item.id ? (
            <FaChevronUp size={24} />
          ) : (
            <FaChevronDown size={24} />
          )}
        </button>
      </div>
      {selectedId === item.id && (
        <div className="content p-2">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
}
