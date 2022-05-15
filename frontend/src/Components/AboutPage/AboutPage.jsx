import NavBar from "../Utility/NavBar";
import About from "./About";
import AboutNew from "./AboutNew";
import Footer from "../Utility/Footer";

function AboutPage(props){

    return(
        <div className="lg:min-h-screen lg:flex lg:flex-col">
            <NavBar/>
            <AboutNew/>
            <Footer className=""/>
        </div>
    )
}

export default AboutPage;
//The footer doesn't reach the bottom of the screen because of the height. Check this out.