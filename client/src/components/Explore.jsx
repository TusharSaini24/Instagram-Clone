import React from "react";
import { FiSearch } from "react-icons/fi";
import tushar from "../assets/Tushar.jpeg";

let users = [
  { id: 1, image: tushar },
  { id: 2, image: tushar },
  { id: 3, image: tushar },
  { id: 4, image: tushar },
  { id: 5, image: tushar },
  { id: 6, image: tushar },
];

const Explore = () => {
  return (
    <div className="bg-[#fafafa] p-10">
      {/* search bar  */}
      <div className="w-full bg-[#efefef] rounded-md">
        <div className="relative mt-1 p-3 rounded-md ">
          <div className="absolute inset-y-0 bg-[#efefef] flex items-center pointer-events-none h-10">
            <FiSearch className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="bg-[#efefef] block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-7 gap-4">
        {users.map(({ id, image }) => (
          <div key={id} className="cursor-pointer">
            <img className="h-72 w-full mb-4" src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
