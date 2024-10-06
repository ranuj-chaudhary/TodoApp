import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import data from "./data";

export function Accordion() {
  return (
    <div className="w-96">
      {data.map((item) => (
        <AccordionContent item={item} key={item.id} />
      ))}
    </div>
  );
}

function AccordionContent({ item, onSingleSelectedId }) {
  const [singleSelectedId, setSingleSelectedId] = useState(null);
  function handleSingleSelectedId(getSelectId) {
    setSingleSelectedId(singleSelectedId === getSelectId ? null : getSelectId);
  }
  return (
    <div className="content_togller ">
      <div className="flex justify-between border-black border-2 align-middle">
        <h1 className="font-bold">
          Q{item.id}.{item.question}
        </h1>
        <button onClick={() => handleSingleSelectedId(item.id)}>
          {singleSelectedId === item.id ? (
            <FaChevronUp size={24} />
          ) : (
            <FaChevronDown size={24} />
          )}
        </button>
      </div>
      {singleSelectedId === item.id && (
        <div className="content p-2">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
}
