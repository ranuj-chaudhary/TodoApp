import { useState, useRef } from "react";
import "./styles.css";
import { useOutsideClick } from "./useOutsideClick";
export const CustomModalPopup = function () {
  const [toggle, setToggle] = useState(true);

  const ref = useRef();
  useOutsideClick(ref, () => setToggle(false));

  function handleClick(event) {
    event.stopPropagation();
    setToggle(!toggle);
  }
  return (
    <>
      <button onClick={handleClick}>Click to View Modal</button>
      {toggle && (
        <div ref={ref} className="modal">
          <h1>this is content of modal</h1>
          <p>click outside the modal to close the modal</p>
        </div>
      )}
    </>
  );
};
