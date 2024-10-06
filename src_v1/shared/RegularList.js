export default function RegularList({ tasks, todo: Todo }) {
  return (
    <ul className="complete_task flex flex-col gap-4 p-4">
      {tasks &&
        tasks.length > 0 &&
        tasks.map((task, i) => <Todo todo={task} key={i} />)}
    </ul>
  );
}
