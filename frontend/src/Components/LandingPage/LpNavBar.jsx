import Logo from "../Utility/Logo"
import Button from "../Utility/Button"
import { useMoralis } from "react-moralis";

function LpNavBar(){

    const { authenticate, isAuthenticated } = useMoralis();

    const login = async () => {
        console.log("fired")
        if (!isAuthenticated) {
          await authenticate({signingMessage: "Log in using Moralis" })
            .then(function (user) {
              console.log("logged in user:", user);
              console.log(user.get("ethAddress"));
            })
            .catch(function (error) {
              console.log(error);
            });
        }
    }
    
    return(
        <div className="flex lg:flex-row md:flex-col sm:flex-col justify-between items-center py-10 px-20">
            <Logo className=""/>
            <Button className="md:hidden sm:hidden  lg:block" name="Connect" onClick={login}/>
            <button className="p-5 bg-blue-600" onClick={login}>Login</button>
        </div>
    )
}

export default LpNavBar;