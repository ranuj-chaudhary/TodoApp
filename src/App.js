import { Provider } from 'react-redux';
import { store } from './Todo_redux/store';

import './App.css';

import TodoLayout from './Layout';
// LAYOUT

function App() {
  return (
    <Provider store={store}>
      <TodoLayout />
    </Provider>
  );
}

export default App;

// import logo from './logo.svg';
// import { AiFillStar } from 'react-icons/ai';
// import StarRating from './StarRating';
// import TreeMenu from './dynamic-menu';
// import menus from './dynamic-menu/data';
// import ImageSlider from './images-slider';
// import LightDarkTheme from './light-dark-mode.js';
// import OnClickCounter from './onClickCounter';
// import OnHoverCounter from './onHoverCounter';
// import SearchAutoComplete from './SearchAutoCompleteWithApi/searchAutoComplete';
// import TestWindowSize from './useWindowResize/TestWindowSize';
// import { CustomModalPopup } from './CustomModalPopup/CustomModalPopup';
// import { Accordion } from './Accordion/index.js';
// import { CustomTabs } from './CustomTab/customTab';

// {/* {<Accordion />} */}
//         {/* <CustomModalPopup /> */}
//         {/* <CustomTabs /> */}
//         {/* <SearchAutoComplete url="https://dummyjson.com/users" /> */}
//         {/* <OnClickCounter />
//       <OnHoverCounter /> */}
//         {/* <TestWindowSize /> */}
