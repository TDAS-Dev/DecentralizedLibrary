import Oghenetega from "../../Images/Oghenetega.png"
import githubIcon from "../../Images/githubLogo.png"
import linkedInIcon from "../../Images/linkedInLogo.png"
import twitterIcon from "../../Images/twitterLogoColoured.png"
import PhoneIcon from "../../Images/callIcon.png"

function About(props){
    const data = [
        {
            image: "../../Images/Oghenetega.png",
            name: "Esedere Oghenetega",
            links : {
                github: "",
                twitter: "",
                instagram: "",
                linkedIn: "",
                facebook:"",
                portfolio: ""
            },
            description: "",
            contact: {
                email: "arcteggzz@gmai.com",
                phone: "07088478400"
            },
            stack : "ReactJS, Solidity, Javascript",
            industry: "Web Development, Blockchain, web3, web2"
        },
        {   
            image: "",
            name: "Mike Doe ",
            links : {
                github: "",
                twitter: "",
                instagram: "",
                linkedIn: "",
                facebook:"",
                portfolio: ""
            },
            description: "",
            contact: {
                email: "arcteggzz@gmai.com",
                phone: "07088478400"
            },
            stack : "ReactJS, Solidity, Javascript, Golang",
            industry: "Web Development, Blockchain, web3, web2"
        }
    ]
    
    return(
        <div className="flex flex-col items-center">
            <h1 className={h1Aboutstyle}>Meet the Project Team</h1>
            <h2 className={h2Aboutstyle}>
                The Project was a collaboration between two young and curius developers looking to explore the possibilities and applications of web3 and decentralization.
            </h2>
            <div className="my-20 w-[75%] flex justify-around">
                {data.map(elem => {
                    return(
                        <div className="flex justify-center items-center w-[40%] space-x-10">
                            <div>
                                <h1 className="text-black font-[600] lg:text-[1.1rem] md:text-[1rem] sm:text-xl text-center font-raleway my-0">
                                    {elem.name}
                                </h1>
                                <p className="text-black font-[400] lg:text-[0.9rem] md:text-[0.7rem] sm:text-xl text-center font-openSans my-0">
                                    {elem.stack}
                                </p>
                                <p className="text-black font-[400] lg:text-[0.9rem] md:text-[0.7rem] sm:text-xl text-center font-openSans my-0">
                                    {elem.description}
                                </p>
                                <div className="flex w-[100%] bg-gray-400 justify-between px-4 py-3 items-center">
                                    <img src={githubIcon} alt="" className="h-5 w-auto cursor-pointer"/>
                                    <img src={linkedInIcon} alt="" className="h-5 w-auto cursor-pointer"/>
                                    <img src={twitterIcon} alt="" className="h-5 w-auto cursor-pointer"/>
                                    <img src={PhoneIcon} alt="" className="h-5 w-auto cursor-pointer"/>

                                </div>                                
                            </div>
                            {/* <div className="w-[200px] h-[200px] overflow-hidden"> */}
                                <img src={Oghenetega} alt="" className="h-auto w-[200px]"/>
                            {/* </div> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const h1Aboutstyle = `text-black font-bold lg:text-4xl md:text-3xl sm:text-2xl text-center font-raleway`
const h2Aboutstyle = `text-black lg:font-light sm:font-light lg:text-[16px] md:text-1xl sm:text-1xl text-center lg:my-6 md:my-4 sm:mt-2 sm:mb-3 font-lato w-[60%] text-warp font-openSans`

export default About;

//use the method where you create an object and read data off the object to create the elements on screen using map.
