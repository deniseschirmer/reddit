"use client";
import { FC } from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = ({}) => {
  return (
    <div className="flex items-center w-[60%] h-10 rounded-3xl bg-gray-200 px-4">
      <BsSearch />
      <div className="flex justify-between items-center w-36 h-8 rounded-2xl bg-gray-300 px-2 mx-2">
        <img
          className="w-4 h-4 rounded-full overflow-hidden"
          src="https://styles.redditmedia.com/t5_2qmeb/styles/communityIcon_8n4vvenbohgb1.png"
        />
        <p>r/pokemon</p>
        <IoIosCloseCircle />
      </div>
      <input
        className="bg-transparent w-[80%] outline-none border-none focus:border-none focus:outline-none ring-0"
        placeholder="Search community..."
      />
    </div>
  );
};

export default SearchBar;
