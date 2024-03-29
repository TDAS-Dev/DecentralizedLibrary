import Logo from "./Logo"
import accountImage from "../../Images/account png.png"
import Hamburger from "./Hamburger"
import {Link} from "react-router-dom"

function NavBar( { setMobileNavBar, mobileNavBar} ){
    return(
        <div className="flex sm:relative lg:justify-between md:justify-between sm:justify-center items-center py-10 lg:px-20 md:px-12 h-[10vh]">
            <Hamburger className="" setMobileNavBar={setMobileNavBar} mobileNavBar={mobileNavBar}/>
            <Link to="/"><Logo className=""/></Link>
            <div className={mobileNavBar ?
                "lg:block md:block flex items-center lg:justify-between md:justify-between lg:space-x-32 md:space-x-8 sm:h-[90vh] sm:w-[50%] sm:left-0 sm:absolute sm:top-[10vh] sm:bg-gray-600 sm:flex-col sm:justify-around sm:translate-x-[0%] sm:transition sm:ease-in sm:transform sm:duration-500" : 
                "lg:block md:block flex items-center lg:justify-between md:justify-between lg:space-x-32 md:space-x-8 sm:h-[90vh] sm:w-[50%] sm:left-0 sm:absolute sm:top-[10vh] bg-white sm:flex-col sm:justify-around sm:translate-x-[-100%] sm:transition sm:ease-in sm:transform sm:duration-500"
                } >
                <Link to="/home" className={ mobileNavBar ? linksStyleMobile : linksStyle }>Home</Link>
                <Link to="/upload" className={mobileNavBar ? linksStyleMobile : linksStyle}>Upload</Link>
                <Link to="/private" className={mobileNavBar ? linksStyleMobile : linksStyle}>Private</Link>
                <Link to="/project-team" className={mobileNavBar ? linksStyleMobile : linksStyle}>Project Team</Link>
            </div>
            <img src={accountImage} alt="" className="h-auto w-[30px] cursor-pointer lg:block md:block sm:hidden"/>
        </div>
    )
}

const linksStyle = `font-lato font-black text-center lg:text-[1.1rem] md:text-[0.9rem] lg:opacity-1 md:opacity-1 sm:opacity-0 sm:transition sm:ease-in sm:transform sm:duration-500`
const linksStyleMobile = `font-lato font-black text-center lg:text-[1.1rem] md:text-[0.9rem] sm:opacity-1 sm:transition sm:ease-in sm:transform sm:duration-500`

export default NavBar;

//fix the navbar for the hamburger and the smaller screens settings