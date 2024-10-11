import { useEffect, useState } from 'react';
import { todoImage } from "../../../assets"
import { useNavigate } from 'react-router';
import { useAuth } from '../../../context/AuthContext';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');
  const { isAuthenticated, login, emailError, passwordError } = useAuth();
  const navigate = useNavigate();

  
  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate('/', {
          replace: true,
        });
      } else {
        navigate(`app/myday?type='myday'`, {
          replace: true,
        });
      }
    },
    [isAuthenticated, navigate]
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      console.log(email, password);
      login(email, password);
    }
  }

  return (
    <>
      <div className="flex justify-evenly">
        <div className="login__form flex min-h-full flex-col px-6 py-12 lg:px-8 w-3/5">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            /> */}
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address or phone number"
                  />
                  {emailError.length > 0 && (
                    <span className="text-red-700">{emailError}</span>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="/"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={password}
                    onChange={(e) => SetPassword(e.target.value)}
                    placeholder="Password"
                  />
                  {passwordError.length > 0 && (
                    <span className="text-red-700">{passwordError}</span>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full active:scale-95  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a
                href="/"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>

        <div className="todo-image flex items-center justify-center w-2/5">
          <img
            src={`${todoImage}`}
            alt="todo"
            className="w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
