import Logo from "./Logo"
import Button from "./Button"
import accountImage from "../../Images/account png.png"
// import Hamburger from "./Hamburger"

function NavBar(){
    return(
        <div className="">
            {/* <Hamburger className="lg:hidden md:hidden sm:block"/> */}
            <div className="flex justify-between items-center py-10 px-20">
                <Logo className=""/>
                <div className="lg:block md:block sm:hidden flex items-center justify-between space-x-32">
                    <a href="" className={linksStyle}>Home</a>
                    <a href="" className={linksStyle}>Upload</a>
                    <a href="" className={linksStyle}>Private</a>
                    <a href="" className={linksStyle}>Project Team</a>
                </div>
                <img src={accountImage} alt="" className="h-auto w-[30px] cursor-pointer"/>
            </div>
        </div>
    )
}

const linksStyle = `font-lato font-black text-center text-[1.1rem]`
export default NavBar;

//fix the navbar for the hamburger and the smaller screens settings
//ask Abiola