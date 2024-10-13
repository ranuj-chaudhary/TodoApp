export default function RegularCustomList({ customLists, list: List }) {
  return (
    <ul className="flex flex-col gap-4 p-4">
      {customLists &&
        customLists.length > 0 &&
        customLists.map((task, i) => <List todo={task} key={task.id} />)}
    </ul>
  );
}
