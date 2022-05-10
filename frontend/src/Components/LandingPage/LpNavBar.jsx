import Logo from "../Utility/Logo"
import Button from "../Utility/Button"

function LpNavBar(){
    return(
        <div className="flex justify-between items-center py-10 px-20">
            <Logo className=""/>
            <Button className="" name="Connect"/>
        </div>
    )
}

export default LpNavBar;