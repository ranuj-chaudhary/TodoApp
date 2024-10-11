import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// redux
import { Provider } from 'react-redux';
import { store } from './store';

// router
import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// context
import { AuthProvider } from '../context/AuthContext';
import { ThemeContextProvider } from '../context/useThemeContext';

// Pages
import TodoLayout from '../layouts';
import Page from '../pages';
import Auth from '../features/authentication';

// styles
import './App.css';

function App() {
  return (
    <ErrorBoundary fallbackRender={Page.FallBack}>
      <Provider store={store}>
        <AuthProvider>
          <ThemeContextProvider>
            <BrowserRouter>
              <Suspense fallback={<Page.Error />}>
                <Routes>
                  <Route index element={<Auth.Login />} />
                  <Route
                    path="app"
                    element={
                      <Auth.ProtectedRoute>
                        <TodoLayout />
                      </Auth.ProtectedRoute>
                    }
                  >
                    <Route
                      path="/app"
                      element={<Navigate to="myday" replace={true} />}
                    />
                    <Route path="myday" element={<Page.MyDay />} />
                    <Route path="important" element={<Page.ImportantTodo />} />
                    <Route path="tasks" element={<Page.TasksTodo />} />
                    <Route path="customlist" element={<Page.CustomList />} />
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

export default App;
