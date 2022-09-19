import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import dob from "../assets/dob.jpeg";
import axios from "axios";
import { sendOtp } from "../redux/actions/userAction";
const EmailVerify = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");

  useEffect(() => {
    dispatch(sendOtp());
  }, []);
  const userSendOtpCode = useSelector((state) => state.userSendOtpCode);
  const { userOtpCode } = userSendOtpCode;
  console.log(userOtpCode);
  const handleSubmit = () => {
    if (userOtpCode) {
      if (userOtpCode.data.otpCode === parseInt(otp)) {
        navigate("/home");
      }
    }
  };
  return (
    <div className="h-screen bg-gray-50 overflow-scroll flex flex-row justify-center items-center">
      <div>
        <img src={`${dob}`} alt="error" />
      </div>
      <div>
        <div className="bg-white border border-gray-300 w-96 h-full py-8 px-4 flex items-center flex-col mb-3 gap-2">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center">
              <h1 className="bg-no-repeat instagram-logo " />
              <p className="text-center font-normal text-lg">
                Enter the confirmation code
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-center text-sm text-[#a0a7b4]">
                Enter the confirmation code that we sent to the &nbsp;
                {"sainitushar@gmail.com"}{" "}
                <span className="text-[#309bf7] text-base cursor-pointer">
                  {" "}
                  Resend code .
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center w-9/12">
              <input
                autoFocus
                className="text-sm tex-center w-full mb-2 rounded-sm border bg-[#fafafa]  border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                id="otp"
                placeholder="Confirmation code"
                type="text"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <div className=" w-9/12">
              <button
                onClick={handleSubmit}
                className=" w-full text-sm text-center bg-blue-300 text-white py-2 rounded font-medium"
              >
                Next
              </button>
            </div>
            <div>
              <Link
                to="/dob"
                className="text-base text-center text-[#309bf7] font-medium"
              >
                Go back
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white border  border-gray-300 text-center w-96 py-4 px-4">
            <span className="text-sm"> Have an account?</span>
            <Link
              to="/register"
              className="ml-1 text-blue-500 text-sm font-semibold"
            >
              Log in
            </Link>
          </div>
          <div className="mt-3 text-center">
            <span className="text-xs">Get the app</span>
            <div className="flex mt-3 space-x-2 justify-center ">
              <div className="bg-no-repeat apple-store-logo" />
              <div className="bg-no-repeat google-store-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;
