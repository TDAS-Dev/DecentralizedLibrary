import LpNavBar from "./LpNavBar"
import heroImage from ".././../Images/landingPage.jpg"
import Button from "../Utility/Button"

function Hero(props){
    
    return(
        <div className="flex flex-col items-between min-h-screen text-center max-h-fit w-full max-h-100 h-full object-cover bg-no-repeat bg-cover bg-center" style={heroStyle}>
            <LpNavBar/>
            <div className="py-40">
                <h2 className="text-white font-bold text-2xl text-center font-lato tracking-wide">Welcome Back!</h2>
                <h1 className="text-white font-bold text-6xl text-center">Unlimited books, Articles,</h1>
                <h1 className="text-white font-bold text-6xl text-center">and more.</h1>
                <h2 className="text-white font-bold text-2xl text-center my-6 font-lato tracking-wider">Read anytime. Access anywhere.</h2>
                <div className="flex justify-center space-x-20">
                    <Button className="" name="Explore Library"/>
                    <Button className="" name="Connect Wallet"/>
                </div>
            </div>
        </div>
    )
}

const heroStyle = {
    backgroundImage: `url(${heroImage})`
}

export default Hero;
