import React, { useState } from "react";

const Register = () => {
  const [state, setState] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  const handleState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const RegisterFunction = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="h-screen pt-10 overflow-scroll bg-gray-50 flex flex-col justify-start items-center ">
      <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
        <h1 className="bg-no-repeat instagram-logo" />
        <h2
          className="text-center text-[17px]
         mt-4 mr-10 ml-10 mb-[10px] text-[#8e8e8e] font-bold leading-5"
        >
          Sign up to see photos and videos from your friends.
        </h2>
        <div
          className=" mr-10 ml-10 mt-2  mb- bg-[#0095f6]
          rounded-[4px] "
        >
          <button className=" font-bold w-64 border border-transparent rounded-[4px]  text-white  px-2 py-1 text-sm">
            Log in with facebook
          </button>
        </div>
        <div className="flex justify-evenly space-x-2 w-64 mt-4">
          <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
          <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
            or
          </span>
          <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
        </div>
        <form className="mt-8 w-64 flex flex-col">
          <input
            autofocus
            className="text-xs w-full mb-2 rounded-sm border bg-[#fafafa] border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="email"
            placeholder="Email"
            type="text"
            onChange={handleState}
            name="email"
            value={state.email}
          />
          <input
            autofocus
            className="text-xs w-full mb-4 rounded-sm border bg-[#fafafa] border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="password"
            placeholder="Full Name"
            type="text"
            onChange={handleState}
            name="fullname"
            value={state.fullname}
          />
          <input
            autofocus
            className="text-xs w-full mb-4 rounded-sm border bg-[#fafafa] border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="password"
            placeholder="Username"
            type="text"
            onChange={handleState}
            name="username"
            value={state.username}
          />
          <input
            autofocus
            className="text-xs w-full mb-4 rounded-sm  bg-[#fafafa] border border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="password"
            placeholder="Password"
            type="password"
            onChange={handleState}
            name="password"
            value={state.password}
          />
          <div>
            <p className="text-[#8e8e8e] text-[12px] leading-4  mr-10 mb-10  mt-[10px] w-full text-center">
              People who use our service may have uploaded your contact
              information to Instagram
              <a
                href="https://www.facebook.com/help/instagram/261704639352628"
                tabindex="0"
                target="_blank"
                className="text-[#8e8e8e] font-semibold"
              >
                {" "}
                Learn More
              </a>
              <br />
              <br />
              By signing up, you agree to our
              <a
                href="https://www.facebook.com/help/instagram/261704639352628"
                tabindex="0"
                target="_blank"
                className="text-[#8e8e8e] font-semibold"
              >
                {" "}
                Terms
              </a>
              <a
                href="https://www.facebook.com/help/instagram/261704639352628"
                tabindex="0"
                target="_blank"
                className="text-[#8e8e8e] font-semibold"
              >
                {" "}
                Privacy Policy
              </a>
              and
              <a
                href="https://www.facebook.com/help/instagram/261704639352628"
                tabindex="0"
                target="_blank"
                className="text-[#8e8e8e] font-semibold"
              >
                {" "}
                Cookies Policy
              </a>
            </p>
          </div>
          <button
            onClick={RegisterFunction}
            className=" text-sm text-center bg-blue-300 text-white py-1 rounded font-medium"
          >
            Sign up
          </button>
        </form>
      </div>
      <div className="bg-white border border-gray-300 text-center w-80 py-4">
        <span className="text-sm">Don't have an account?</span>
        <a className="text-blue-500 text-sm font-semibold">Sign up</a>
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

export default Register;
