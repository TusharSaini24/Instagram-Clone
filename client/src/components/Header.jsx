import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsPlusSquare, BsHeart } from "react-icons/bs";
import { FaRegCompass, FaRegHeart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineExpandMore } from "react-icons/md";
import { FiPlusSquare, FiSearch } from "react-icons/fi";
import tushar from "../assets/Tushar.jpeg";
import instagramLogo from "../assets/instagramLogo.png";
const Header = () => {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50 flex justify-center">
      <div className="flex justify-between bg-white mx-5 w-3/6 ">
        <div className="flex  justify-center  ">
          {/* <p className="bg-no-repeat instagram-logo text-center " /> */}
          <img src={instagramLogo} alt="logo" className="w-24 h-12" />
          <div className="flex items-center ml-1">
            <MdOutlineExpandMore />
          </div>
        </div>
        <div className="flex items-center w-9/12 justify-end">
          <div className="flex flex-row bg-[#efefef] rounded-md">
            <div className="flex mr-12 p-1">
              <div className=" inset-y-0 flex items-center pointer-events-none mx-1">
                <FiSearch className="h-4 w-4 text-gray-500 font-thin" />
              </div>
              <input
                className="bg-[#efefef]  w-full py-1 text-xs border-gray-300 focus:ring-blac rounded-md pr-4"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="flex items-center flex-col justify-center ">
            <div className="flex items-center justify-around w-full">
              <div className="ml-12 cursor-pointer">
                <MdHomeFilled className="h-5 w-5" />
              </div>

              <div className="relative navBtn ml-4 cursor-pointer">
                <RiMessengerLine className="h-5 w-5" />
                <div className="absolute -top-1 -right-2 text-xs w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <div className=" ml-4 cursor-pointer">
                <FiPlusSquare className="h-5 w-5" />
              </div>
              <div className=" ml-4 cursor-pointer">
                <FaRegCompass className="h-5 w-5" />
              </div>
              <div className=" ml-4 cursor-pointer">
                <FaRegHeart className="h-5 w-5" />
              </div>
              <div className=" ml-4">
                <img
                  alt=" pic"
                  src={tushar}
                  className="h-5 w-5 rounded-full cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
