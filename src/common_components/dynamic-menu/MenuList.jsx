import MenuItem from "./menuitem";

export default function MenuList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <MenuItem item={item} key={item.label}/>
      ))}
    </ul>
  );
}
