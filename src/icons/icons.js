import { AiFillSun } from 'react-icons/ai';
import { AiOutlineSun } from 'react-icons/ai';
import { AiTwotoneStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
// Sun
export function SunFillIcon(props) {
  return <AiFillSun {...props} />;
}

export function SunIcon(props) {
  return <AiOutlineSun {...props} />;
}

// star

// (two outline)
export function StarFillIcon(props) {
  return <AiTwotoneStar {...props} />;
}
// (single outline)
export function StarLineIcon(props) {
  return <AiOutlineStar {...props} />;
}

// user
export function UserIcon(props) {
  return <AiOutlineUser {...props} />;
}

// home or tasks
export function HomeIcon(props) {
  return <AiOutlineHome {...props} />;
}

// search
export function SearchIcon(props) {
  return <AiOutlineSearch {...props} />;
}

// menu
export function MenuIcon(props) {
  return <AiOutlineMenuUnfold {...props} />;
}

// unorderedList
export function UnorderedListIcon(props) {
  return <AiOutlineUnorderedList {...props} />;
}

// add

export function PlusIcon(props) {
  return <AiOutlinePlus {...props} />;
}
