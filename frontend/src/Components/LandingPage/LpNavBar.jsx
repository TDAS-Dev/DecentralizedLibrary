import Logo from "../Utility/Logo"
import Button from "../Utility/Button"

function LpNavBar(){
    return(
        <div className="flex lg:flex-row md:flex-col sm:flex-col justify-between items-center py-10 px-20">
            <Logo className=""/>
            <Button className="md:hidden sm:hidden  lg:block" name="Connect"/>
        </div>
    )
}

export default LpNavBar;