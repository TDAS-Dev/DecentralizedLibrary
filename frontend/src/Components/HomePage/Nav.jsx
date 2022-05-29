import { FaSearch } from "react-icons/fa";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BiStopCircle } from "react-icons/bi";

const Nav = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="w-[400px] text-2xl font-bold px-2">Library</div>
      <div className="flex flex-row justify-between items-center bg-gray-50 p-2 w-full">
        <div className="w-[500px] px-2 flex items-center space-x-2 bg-white mr-14">
          <FaSearch className="text-gray-400 fa-solid" />
          <input
            type="search"
            className="w-full rounded p-2 outline-none"
            placeholder="Search Library"
          />
        </div>
        <div className="px-2">
          <nav>
            <ul className="flex space-x-4 items-center">
              <li>
                <a href="" className="font-medium mr-2">
                  Explore
                </a>
              </li>
              <li>
                <a href="" className="font-medium mr-2">
                  Event
                </a>
              </li>
              <li>
                <button className="bg-green-200 hover:bg-green-300 px-7 text-green-700 py-2 flex items-center">
                  <BiStopCircle className="text-2xl mr-2 text-green-700" />
                  Record
                </button>
              </li>
              <li>
                <button className="bg-green-500 hover:bg-green-600 px-7 text-green-50 py-2 flex items-center">
                  <AiOutlineCloudDownload
                    type="FaRegular"
                    className="text-2xl mr-2 text-green-50"
                  />
                  Upload
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
