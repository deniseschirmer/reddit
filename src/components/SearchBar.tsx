import { FC } from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = ({}) => {
  return (
    <div className="flex items-center  h-10 sm:h-10 xs:h-6 rounded-3xl bg-transparent shadow-lg bg-gray-200 p-0 sm:p-2 px-2 gap-2">
      <BsSearch className="h-6 w-12 sm:h-8 sm:w-5 xs:h-4 xs:w-4" />
      <span className="flex items-center flex-grow w-[100%] sm:w-36 justify-center xs:w-28 h-8 rounded-2xl bg-gray-300 px-3 xs:px-3">
        <button className="flex justify-between items-center h-10 sm:h-10 xs:h-6">
          <img
            className="w-8 h-4 sm:w-3 sm:h-3 xs:w-2 xs:h-2 rounded-full overflow-hidden mr-2"
            src="https://styles.redditmedia.com/t5_2qmeb/styles/communityIcon_8n4vvenbohgb1.png"
            alt="Community Icon"
          />
          <p className="text-sm sm:text-base xs:text-xs font-bold">r/pokemon</p>
          <IoIosCloseCircle className="w-12 h-6 p-1" />
        </button>
      </span>
      <input
        className="bg-transparent w-full sm:w-1/2 xs:w-2/3 outline-none border-none focus:border-none focus:outline-none ring-0 text-sm sm:text-base xs:text-xs"
        placeholder=" "
      />
    </div>
  );
};

export default SearchBar;
