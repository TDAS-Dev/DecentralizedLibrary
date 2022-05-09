import LpNavBar from "./LpNavBar"
import heroImage from ".././../Images/landingPage.jpg"

function Hero(props){
    
    return(
        <div className="max-h-fit w-full py-8 max-h-100 h-full object-cover bg-no-repeat bg-cover bg-center" style={heroStyle}>
            <LpNavBar/>
        </div>
    )
}

const heroStyle = {
    backgroundImage: `url(${heroImage})`
}

export default Hero;