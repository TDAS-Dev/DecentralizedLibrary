import LpNavBar from "./LpNavBar"
import heroImage from ".././../Images/landingPage.jpg"
import Button from "../Utility/Button"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function Hero({ setMobileNavBar, mobileNavBar }){
    return(
        <div className={heroPageStyle} style={heroStyle}>
            <LpNavBar setMobileNavBar={setMobileNavBar} mobileNavBar ={mobileNavBar}/>
            <div className="lg:py-40 md:py-40 sm:pt-20 sm:pb-40 lg:flex lg:flex-col lg:items-center">
                <h2 className={h2herostyle}>Welcome Back!</h2>
                <h1 className={h1herostyle}>Unlimited books, Articles, and more.</h1>
                {/* <h1 className={h1herostyle}></h1> */}
                <h2 className={h2herostyle}>Read anytime. Access anywhere.</h2>
                <div className={buttonDivStyle}>
                    <Link to="/home"><Button className="" name="Explore Library"/></Link>
                    <Button className="" name="Connect Wallet"/>
                </div>
            </div>
        </div>
    )
}

const heroPageStyle = `flex flex-col items-between min-h-screen text-center max-h-fit w-full max-h-100 h-full object-cover bg-no-repeat bg-cover bg-center`
const h1herostyle = `text-white font-bold lg:text-6xl md:text-4xl sm:text-3xl text-center lg:w-[60%]`
const h2herostyle = `text-white lg:font-bold sm:font-semibold lg:text-2xl md:text-1xl sm:text-1xl text-center lg:my-6 md:my-4 sm:mt-2 sm:mb-3 font-lato tracking-wider`
const heroStyle = {
    backgroundImage: `url(${heroImage})`
}
const buttonDivStyle = `flex lg:flex-row md:flex-row sm:flex-col lg:justify-center md:justify-center sm:items-center lg:items-center md:items-center lg:space-x-20 md:space-x-14 sm:space-y-7 lg:space-y-0 md:space-y-0 sm:mt-10`

export default Hero;
