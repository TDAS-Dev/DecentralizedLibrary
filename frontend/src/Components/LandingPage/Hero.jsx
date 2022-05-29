import LpNavBar from "./LpNavBar"
import heroImage from ".././../Images/landingPage.jpg"
import Data from "../../utils/Data"
import Button from "../Utility/Button"
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";

function Hero({ setMobileNavBar, mobileNavBar }){
    //function to prevent the explore library function from erroring out
    const nullFunction = () => {return}

    //state from moralis documentation for loging in a user
    const { authenticate, isAuthenticated } = useMoralis();

    //login a user
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
        <div className={heroPageStyle} style={heroStyle}>
            <LpNavBar setMobileNavBar={setMobileNavBar} mobileNavBar ={mobileNavBar}/>
            <div className="lg:py-40 md:py-40 sm:pt-20 sm:pb-40 lg:flex lg:flex-col lg:items-center">
                <h2 className={h2herostyle}>Welcome Back!</h2>
                <h1 className={h1herostyle}>Unlimited books, Articles, and more.</h1>
                <h2 className={h2herostyle}>Read anytime. Access anywhere.</h2>
                <div className={buttonDivStyle}>
                    <Link to="/home"><Button className="" name="Explore Library" run={nullFunction}/></Link>
                    <Button className="" name="Connect Wallet" run={login}/>
                </div>
            </div>
        </div>
    )
}

const heroPageStyle = `flex flex-col items-between min-h-screen text-center max-h-fit w-full max-h-100 mix-blend-overlay h-full object-cover bg-no-repeat bg-cover bg-center`
const h1herostyle = `text-white font-bold lg:text-6xl md:text-4xl sm:text-3xl text-center lg:w-[60%]`
const h2herostyle = `text-white lg:font-bold sm:font-semibold lg:text-2xl md:text-1xl sm:text-1xl text-center lg:my-6 md:my-4 sm:mt-2 sm:mb-3 font-lato tracking-wider`
const heroStyle = {
    backgroundImage: `url(${Data.HeroImg})`,
}
const buttonDivStyle = `flex lg:flex-row md:flex-row sm:flex-col lg:justify-center md:justify-center sm:items-center lg:items-center md:items-center lg:space-x-20 md:space-x-14 sm:space-y-7 lg:space-y-0 md:space-y-0 sm:mt-10`

export default Hero;
