import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOGIN_ERROR: 'LOGIN_ERROR',
};

const initialState = {
  isAuthenticated: false,
  user: {
    name: '',
    email: '',
    password: '',
  },
  loginError: {
    emailError: '',
    passwordError: '',
  },
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: { ...state.user, ...action.payload },
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        ...initialState,
      };
    case actionTypes.LOGIN_ERROR:
      console.log(action.payload);
      return {
        ...state,
        loginError: action.payload,
      };
    default:
      throw new Error('Unknown Action Type.');
  }
}

const FAKE_USER = {
  name: 'Ranuj Chaudhary',
  email: 'admin@gmail.com',
  password: 'admin123',
  userImage: 'https://i.pravatar.cc/100?u=zz',
};

function AuthProvider({ children }) {
  const [{ isAuthenticated, user, loginError }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const { emailError, passwordError } = loginError;

  function login(email, password) {
    if (FAKE_USER.email === email && FAKE_USER.password === password) {
      dispatch({ type: actionTypes.LOGIN, payload: FAKE_USER });
    } else if (FAKE_USER.email !== email) {
      dispatch({
        type: actionTypes.LOGIN_ERROR,
        payload: {
          emailError:
            "The email address you entered isn't connected to an account.",
          passwordError: '',
        },
      });
    } else if (FAKE_USER.password !== password) {
      dispatch({
        type: actionTypes.LOGIN_ERROR,
        payload: {
          emailError: '',
          passwordError: `The password that you've entered is incorrect.`,
        },
      });
    }
  }

  function logout() {
    dispatch({ type: actionTypes.LOGOUT });
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        emailError,
        passwordError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    return 'Problem fetching auth context.';
  }

  return context;
}

export { useAuth, AuthProvider };
