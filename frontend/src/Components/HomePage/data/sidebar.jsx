import { AiFillHome } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";
import { BiHistory } from "react-icons/bi";
import { MdOutlinePermMedia } from "react-icons/md";

const SideBarLinks = [
  { icon: <AiFillHome className="group-hover:text-blue-600"/>, title: "Home", link: "/home" },
  { icon: <MdFavorite className="group-hover:text-blue-600"/>, title: "Favourite", link: "/favourite" },
  { icon: <MdOutlinePermMedia className="group-hover:text-blue-600"/>, title: "Content", link: "/content" },
  { icon: <BsPlayFill className="group-hover:text-blue-600"/>, title: "Playlist", link: "/playlist" },
  { icon: <BiHistory className="group-hover:text-blue-600"/>, title: "History", link: "/history" },
];

export default SideBarLinks;
