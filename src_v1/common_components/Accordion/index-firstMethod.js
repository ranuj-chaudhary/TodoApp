import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import data from "./data";
export function Accordion() {
  const [singleSelectedId, setSingleSelectedId] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelectedId(getSelectId) {
    setSingleSelectedId(singleSelectedId === getSelectId ? null : getSelectId);
  }

  function handleMultipleSelection(getSelectId) {
    let cpymultiple = [...multiple];
    let getCurrentIndex = cpymultiple.indexOf(getSelectId);

    if (getCurrentIndex === -1) {
      cpymultiple.push(getSelectId);
    } else {
      cpymultiple.splice(getCurrentIndex, 1);
    }
    
    setMultiple(cpymultiple);
    setSingleSelectedId(null);
  }
  return (
    <div className="w-96">
      <button
        className="bg-slate-400 mb-3 p-4 text-white cursor-pointer hover:scale-95"
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
      >
        Enable Muliple Selection
      </button>
      {data.map((item) => (
        <div className="content_togller " key={item.id}>
          <div className="flex justify-between border-black border-2 align-middle">
            <h1 className="font-bold">
              Q{item.id}.{item.question}
            </h1>
            <button
              onClick={
                enableMultipleSelection
                  ? () => handleMultipleSelection(item.id)
                  : () => handleSingleSelectedId(item.id)
              }
            >
              {(enableMultipleSelection && multiple.indexOf(item.id) !== -1) ||
              singleSelectedId === item.id ? (
                <FaChevronUp size={24} />
              ) : (
                <FaChevronDown size={24} />
              )}
            </button>
          </div>
          {enableMultipleSelection
            ? multiple.indexOf(item.id) !== -1 && (
                <div className="content p-2">
                  <p>{item.answer}</p>
                </div>
              )
            : singleSelectedId === item.id && (
                <div className="content p-2">
                  <p>{item.answer}</p>
                </div>
              )}
        </div>
      ))}
    </div>
  );
}
