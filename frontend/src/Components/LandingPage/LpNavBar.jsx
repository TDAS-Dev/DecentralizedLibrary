import Logo from "../Utility/Logo"
import Button from "../Utility/Button"

function LpNavBar(){
    return(
        <div className="flex justify-between items-center px-4">
            <Logo/>
            <Button className="" name="Connect"/>
        </div>
    )
}

export default LpNavBar;