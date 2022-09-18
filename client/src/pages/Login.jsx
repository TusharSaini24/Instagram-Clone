import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const loginFunction = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
        <h1 className="bg-no-repeat instagram-logo" />
        <form className="mt-8 w-64 flex flex-col">
          <input
            autoFocus
            className="text-xs w-full mb-2 rounded-sm border bg-[#fafafa]  border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="email"
            placeholder="Phone number, username, or email"
            type="email"
            onChange={handleState}
            name="email"
            value={state.email}
          />
          <input
            autoFocus
            className="text-xs w-full mb-4 rounded-sm border bg-[#fafafa]  border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="password"
            placeholder="Password"
            type="password"
            onChange={handleState}
            name="password"
            value={state.password}
          />
          <button
            onClick={loginFunction}
            className=" text-sm text-center bg-blue-300 text-white py-1 rounded font-medium"
          >
            Log In
          </button>
        </form>
        <div className="flex justify-evenly space-x-2 w-64 mt-4">
          <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
          <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
            or
          </span>
          <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
        </div>
        <button className="mt-4 flex">
          <div className="bg-no-repeat facebook-logo mr-1" />
          <span className="text-xs text-blue-900 font-semibold">
            Log in with Facebook
          </span>
        </button>
        <a className="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">
          Forgot password?
        </a>
      </div>
      <div className="bg-white border border-gray-300 text-center w-80 py-4">
        <span className="text-sm">Don't have an account?</span>
        <button className="text-blue-500 text-sm font-semibold">Sign up</button>
      </div>
      <div className="mt-3 text-center">
        <span className="text-xs">Get the app</span>
        <div className="flex mt-3 space-x-2">
          <div className="bg-no-repeat apple-store-logo" />
          <div className="bg-no-repeat google-store-logo" />
        </div>
      </div>
    </div>
  );
};

export default Login;
