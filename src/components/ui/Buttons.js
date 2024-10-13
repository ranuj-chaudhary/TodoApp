import { PlusIcon } from './icons/icons';
export function AddButton({ onClick }) {
  return (
    <div className=" flex items-center justify-center">
      <button
        className="flex w-32 gap-2 rounded-md bg-blue-200 p-2 bg-opacity-70"
        onClick={onClick}
      >
        <span>
          <PlusIcon size={24} />
        </span>
        Add list
      </button>
    </div>
  );
}
