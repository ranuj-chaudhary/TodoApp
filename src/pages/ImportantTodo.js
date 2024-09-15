import { ImportantTask } from "../components/Tasks";

export function ImportantTodo() {
  return (
    <div className="My day">
      <ImportantTask
        toggleName={'Important'}
      />
    </div>
  );
}
