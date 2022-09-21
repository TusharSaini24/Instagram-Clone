import tushar from "../../../../assets/Tushar.jpeg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { RiChat1Line } from "react-icons/ri";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { HiOutlineEmojiHappy } from "react-icons/hi";

function Post() {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/*HEader*/}
      <div className="flex items-center p-5">
        <img
          src={tushar}
          alt=""
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />

        <p className="flex-1 font-bold">tushar</p>

        <HiOutlineDotsCircleHorizontal className=" btn" />
      </div>

      {/*img*/}
      <img className="object-cover w-full" src={tushar} alt="" />

      {/*Buttons*/}

      <div className="flex justify-between px-4 pt-4">
        <div className="flex items-center space-x-4">
          <div className="flex flex-col">
            {/* <AiFillHeart className="btn !text-red-600" /> */}

            <AiOutlineHeart className="btn" />

            {/* <p className="font-bold">20 likes</p> */}
          </div>
          <RiChat1Line className="btn" />
          <HiOutlinePaperAirplane className="btn" />
        </div>

        <BiBookmark className="btn" />
      </div>

      {/*caption*/}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">unkown</span>
        this is dope
      </p>

      {/*Comments*/}

      <div className="ml-10 mt-4 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
        <div className="flex items-center truncate mb-3 space-x-2">
          <img
            src={tushar}
            alt="User comment image"
            className="h-7 rounded-full"
          />

          <span className="h-7 w-7 rounded-full bg-gray-600 text-white text-center">
            tushar
          </span>

          <p className="text-sm flex-1">
            <span className="font-bold mr-2">tushar usename</span>
            mern stack build
          </p>
          <div fromNow className="pr-5 text-xs text-gray-400">
            10/20/2022
          </div>
        </div>
      </div>

      {/*input box*/}

      <form className="flex items-center p-4">
        <HiOutlineEmojiHappy className="h-7 mr-2 btn" />
        <input
          className="flex-1 border-none focus:ring-0 outline-none"
          type="text"
          placeholder="Add a Comment..."
        />
        <button type="submit" className="font-semibold text-blue-400">
          Post
        </button>
      </form>
    </div>
  );
}

export default Post;
