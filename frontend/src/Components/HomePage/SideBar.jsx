import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";
import { BiHistory } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className="flex flex-col">
      <ul className="space-y-4">
        <li className="flex p-2 space-x-4 items-center">
          <AiFillHome />
          <Link to="/">Home</Link>
        </li>
        <li className="flex p-2 space-x-4 items-center">
          <MdFavorite />
          <Link to="/">Favourite</Link>
        </li>
        <li className="flex p-2 space-x-4 items-center">
          <BsPlayFill />
          <Link to="/">Content</Link>
        </li>
        <li className="flex p-2 space-x-4 items-center">
          <BsPlayFill />
          <Link to="/">Playlist</Link>
        </li>
        <li className="flex p-2 space-x-4 items-center">
          <BiHistory />
          <Link to="/">History</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
