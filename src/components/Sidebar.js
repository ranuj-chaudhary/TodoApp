import { AiOutlineSearch } from 'react-icons/ai';

const sidebarStyles = {
  searchIcon: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%) rotate(90deg)',
  },
  input:
    'border-2 border-gray-200 border-b-[1px] border-b-slate-500 w-full rounded-md p-[4px] text-sm focus:outline-blue-400 focus:border-b-2 focus:border-blue',
};

export const Sidebar = () => {
  return (
    <div className="side_bar w-1/5 p-2 pt-4">
      <div>
        <section className="profile flex gap-4">
          <div className="profile__image  py-2">
            <span className="flex items-center w-8 h-8 rounded-full bg-purple-500 justify-center text-white">
              RC
            </span>
          </div>
          <div className="profile__name   flex flex-col">
            <p className="">ranuj chaudhary</p>
            <p className=" text-xs text-gray-500">ranujchaudhary@gmail.com</p>
          </div>
        </section>
        <div className="search  py-2 relative">
          <input
            type="text"
            placeholder="Search"
            className={sidebarStyles.input}
          />
          <AiOutlineSearch style={sidebarStyles.searchIcon} />
        </div>
      </div>
    </div>
  );
};
