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

