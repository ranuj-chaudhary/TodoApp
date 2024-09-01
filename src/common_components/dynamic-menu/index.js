import MenuList from "./MenuList";
import "./styles.css"
export default function TreeMenu({ menus = [] }) {
  return (
    <div className="container">
      <MenuList items={menus} />
    </div>
  );
}
