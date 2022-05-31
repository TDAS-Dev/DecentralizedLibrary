import { Link } from "react-router-dom";
import SideInfo from "./data/sidebar";

const SideBar = () => {
  return (
    <div className="lg:flex flex-col w-[150px] md:hidden sm:hidden">
      <ul className="space-y-4">
        {SideInfo.map((data, index) => (
          <li key={index} className="group transition-all ease-linear">
            <div className="flex p-2 space-x-4 items-center group-hover:bg-blue-300">
            <span>{data.icon}</span>
            <Link to={data.link}>{data.title}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
