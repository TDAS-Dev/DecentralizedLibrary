import Logo from "../Utility/Logo"
import Button from "../Utility/Button"
import { Link } from "react-router-dom"
import Hamburger from "../Utility/Hamburger"

function LpNavBar( { setMobileNavBar, mobileNavBar} ){
    return(
        <div className="flex lg:flex-row md:flex-col sm:flex-col justify-between items-center py-10 px-20">
            <Hamburger className="" setMobileNavBar={setMobileNavBar} mobileNavBar={mobileNavBar}/>
            <Link to="/"><Logo className=""/></Link>
            <Button className="md:hidden sm:hidden  lg:block" name="Connect"/>
        </div>
    )
}

export default LpNavBar;