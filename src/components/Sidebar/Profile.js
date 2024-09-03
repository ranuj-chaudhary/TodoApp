import { SearchIcon } from '../../icons/icons';

const profilteStyles = {
  searchIcon: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%) rotate(90deg)',
  },
  input:
    'border-2 border-gray-200 border-b-[1px] border-b-slate-500 w-full rounded-md p-[4px] text-sm focus:outline-blue-400 focus:border-b-2 focus:border-blue',
};

export function Profile() {
  return (
    <section className="profile__detail">
      <div className="profile flex gap-4 items-center">
        <div className="profile__image  py-2">
          <span className="flex items-center w-10 h-10 rounded-full bg-purple-500 justify-center text-white">
            RC
          </span>
        </div>
        <div className="profile__name   flex flex-col justify-center">
          <p className="">ranuj chaudhary</p>
          <p className=" text-xs text-gray-500">ranujchaudhary@gmail.com</p>
        </div>
      </div>
      <div className="search  py-2 relative">
        <input
          type="text"
          placeholder="Search"
          className={profilteStyles.input}
        />
        <SearchIcon style={profilteStyles.searchIcon} />
      </div>
    </section>
  );
}
