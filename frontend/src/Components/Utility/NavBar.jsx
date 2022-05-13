import Logo from "./Logo"
import Button from "./Button"
import Hamburger from "./Hamburger"

function NavBar(){
    return(
        <div className="">
            <Hamburger className="lg:hidden md:hidden sm:block"/>
            <div className="">
                <Logo className=""/>
                <ul className="lg:block md:block sm:hidden">
                    <li><a href="">Home</a></li>
                    <li><a href="">Upload</a></li>
                    <li><a href="">Private</a></li>
                    <li><a href="">Project Team</a></li>
                </ul>
                <Button className="" name="Address of logged user"/>
            </div>
        </div>
    )
}

export default NavBar;