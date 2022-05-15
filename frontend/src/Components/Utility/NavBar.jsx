import Logo from "./Logo"
import accountImage from "../../Images/account png.png"
import Hamburger from "./Hamburger"

function NavBar(){
    return(
        <div className="flex sm:relative lg:justify-between md:justify-between sm:justify-center items-center py-10 lg:px-20 md:px-12">
            <Hamburger className=""/>
            <Logo className=""/>
            <div className="lg:block md:block sm:hidden flex items-center justify-between lg:space-x-32 md:space-x-8">
                <a href="" className={linksStyle}>Home</a>
                <a href="" className={linksStyle}>Upload</a>
                <a href="" className={linksStyle}>Private</a>
                <a href="" className={linksStyle}>Project Team</a>
            </div>
            <img src={accountImage} alt="" className="h-auto w-[30px] cursor-pointer lg:block md:block sm:hidden"/>
        </div>
    )
}

const linksStyle = `font-lato font-black text-center lg:text-[1.1rem] md:text-[0.9rem]`
export default NavBar;

//fix the navbar for the hamburger and the smaller screens settings
//ask Abiola