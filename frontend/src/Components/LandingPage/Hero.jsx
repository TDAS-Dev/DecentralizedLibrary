import LpNavBar from "./LpNavBar"
import heroImage from ".././../Images/landingPage.jpg"
import Button from "../Utility/Button"

function Hero(props){
    
    return(
        <div className="max-h-fit w-full py-8 max-h-100 h-full object-cover bg-no-repeat bg-cover bg-center" style={heroStyle}>
            <LpNavBar/>
            <h2>Welcome Back!</h2>
            <h1>Unlimited books, Articles, and more.</h1>
            <h2>Read anytime. Access anywhere.</h2>
            <div className="buttons">
                <Button className="" name="Explore Library"/>
                <Button className="" name="Connect Wallet"/>
            </div>
        </div>
    )
}

const heroStyle = {
    backgroundImage: `url(${heroImage})`
}

export default Hero;