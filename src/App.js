import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import './App.css';
import { store } from './store';
import { AuthProvider } from './context/AuthContext';
// Pages
import TodoLayout from './Layout';
import { MyDay } from './pages/MyDay';
import { ImportantTodo } from './pages/ImportantTodo';
import { TasksTodo } from './pages/TasksTodo';
import { Login } from './pages/Login';
import { ThemeContextProvider } from './context/useThemeContext';
import ProtectedRoute from './components/ProtectedRoute';
import { CustomList } from './pages/CustomList';
import { ErrorBoundary } from 'react-error-boundary';
import { FallBack } from './components/FallBackRender';

function App() {
  return (
    <ErrorBoundary fallbackRender={FallBack}>
      <Provider store={store}>
        <AuthProvider>
          <ThemeContextProvider>
            <BrowserRouter>
              <Suspense fallback={<Error />}>
                <Routes>
                  <Route index element={<Login />} />
                  <Route
                    path="app"
                    element={
                      <ProtectedRoute>
                        <TodoLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route
                      path="/app"
                      element={<Navigate to="myday" replace={true} />}
                    />
                    <Route path="myday" element={<MyDay />} />
                    <Route path="important" element={<ImportantTodo />} />
                    <Route path="tasks" element={<TasksTodo />} />
                    <Route path="customlist" element={<CustomList />} />

                    <Route
                      path="*"
                      element={<Navigate to="myday" replace={true} />}
                    />
                  </Route>
                </Routes>
              </Suspense>
            </BrowserRouter>
          </ThemeContextProvider>
        </AuthProvider>
      </Provider>
    </ErrorBoundary>
  );
}

function Error() {
  return <p>Error loading todo</p>;
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
