import { useState } from "react";
import MenuList from "./MenuList";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineLine } from "react-icons/ai";

export default function MenuItem({ item }) {
  const [displayCurrChildren, setCurrChildren] = useState({});
  function handleCurrChildren(getCurrChildren) {
    setCurrChildren({
      ...displayCurrChildren,
      [getCurrChildren]: !displayCurrChildren[getCurrChildren],
    });
  }

  return (
    <li>
      <div>
        <p>{item.label}</p>
      </div>
      <span onClick={() => handleCurrChildren(item.label)}>
        {item && item.children && item.children.length ? (
          displayCurrChildren[item.label] ? (
            <AiOutlineLine />
          ) : (
            <AiOutlinePlus />
          )
        ) : null}
      </span>
      {item &&
      item.children &&
      item.children.length &&
      displayCurrChildren[item.label] ? (
        <MenuList items={item.children} key={item.label}/>
      ) : null}
    </li>
  );
}
