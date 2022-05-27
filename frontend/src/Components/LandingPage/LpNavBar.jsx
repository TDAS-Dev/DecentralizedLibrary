import Logo from "../Utility/Logo"
import Button from "../Utility/Button"
import { Link } from "react-router-dom"
import Hamburger from "../Utility/Hamburger"
import { useMoralis } from "react-moralis";

function LpNavBar( { setMobileNavBar, mobileNavBar} ){
  const { authenticate, isAuthenticated } = useMoralis();

  const login = async () => {
    //if user is authenticated already, do not login user again. $resource management
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
      <Hamburger className="" setMobileNavBar={setMobileNavBar} mobileNavBar={mobileNavBar}/>
      <Link to="/"><Logo className=""/></Link>
      <Button className="md:hidden sm:hidden  lg:block" name="Connect" run={login}/>
    </div>
  )
}

export default LpNavBar