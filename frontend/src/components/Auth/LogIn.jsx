import {Link} from "react-router-dom"

const LogIn = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="flex border border-gray-700 shadow shadow-gray-400 text-lightWhite flex-col max-w-md min-w-[25rem] px-10 pt-7 pb-5 rounded-md sm:px-10">
        <div className="mb-8 text-center">
          <h1 className="my-1 text-lightWhite text-4xl font-bold">Log In</h1>
          <p className="text-sm dark:text-gray-600">
            Log into your account
          </p>
        </div>
        <form noValidate="" action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-2 text-sm">
                Enter Username
              </label>
              <input
                type="username"
                name="username"
                id="username"
                placeholder="jenkins"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Enter Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md bg-purple hover:bg-darkPurple dark:text-gray-50"
              >
                Log In
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Don't have an account?,{" "}
              <Link
                rel="noopener noreferrer"
                to={"/signup"}
                className="hover:underline text-darkPurple"
              >
                {" "}
                Sign Up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
