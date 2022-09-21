import React, { useState } from "react";
import { MdHomeFilled } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegCompass, FaRegHeart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { FiPlusSquare, FiSearch } from "react-icons/fi";
import tushar from "../assets/Tushar.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="shadow-sm border-b bg-white p-2 sticky top-0 z-50 ">
      <div className="flex justify-between bg-white max-w-6xl mx-5  lg:mx-auto">
        {/*Left*/}
        <Link to="/home">
          <div className="relative hidden lg:inline-grid w-24 mt-2 cursor-pointer">
            <img
              src="https://links.papareact.com/ocw"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
        <Link to="/home">
          <div className="relative w-10 lg:hidden flex-shrink-0 mt-2 cursor-pointer">
            <img
              src="https://links.papareact.com/jjm"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>

        {/*Middle*/}

        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 flex items-center pointer-events-none h-10">
              <FiSearch className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/*Right*/}
        <div className="flex items-center justify-end space-x-4">
          <MdHomeFilled className="navBtn" />
          <AiOutlineMenu className="h-6 md:hidden cursor-pointer" />

          <>
            <div className="relative navBtn">
              <RiMessengerLine className="navBtn" />
              <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                3
              </div>
            </div>

            <FiPlusSquare onClick={() => setShow(true)} className="navBtn" />
            <Link to="/explore">
              <FaRegCompass className="navBtn" />
            </Link>
            <FaRegHeart className="navBtn" />

            <Link to="/profile">
              {" "}
              <img
                src={tushar}
                alt="profile pic"
                className="h-7 w-7 rounded-full cursor-pointer"
              />
            </Link>
          </>
        </div>
      </div>
    </div>
  );
};

export default Header;
