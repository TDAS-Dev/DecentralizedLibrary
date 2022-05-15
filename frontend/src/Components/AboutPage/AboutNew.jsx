import Oghenetega from "../../Images/Oghenetega.png"
import Button from "../Utility/Button"

function AboutNew(props){
    const data = [
        {
            image: "../../Images/Oghenetega.png",
            name: "Esedere Oghenetega Kelvin",
            links : {
                github: "",
                twitter: "",
                instagram: "",
                linkedIn: "",
                facebook:"",
                portfolio: ""
            },
            description: "Oghenetega is an aspiring programmer in the Industry. He got into the industry in April, 2021. He is currently well versed in web development technologies as well as writing smart contracts using Solidity. His hobbies are problem solving, gaming and designing. A graduate of architecture from University of Lagos, Nigeria, he is open to all kinds of knowledge and learning.",
            contact: {
                email: "arcteggzz@gmail.com",
                phone: "07088478400"
            },
            stack : "ReactJS, Solidity, Javascript",
            industry: "Web Development, Blockchain, web3, web2"
        },
        {   
            image: "../../Images/Oghenetega.png",
            name: "Mike Doe ",
            links : {
                github: "",
                twitter: "",
                instagram: "",
                linkedIn: "",
                facebook:"",
                portfolio: ""
            },
            description: "if it hurts to breathm this is a happy house, we're ahappy here, in the happy house oh this is fun funf unf this i sfun to nme. this is fun. Bring the 707 now. s is a happy house, we're ahappy here, in the happy house oh this is fun funf unf this i sfun to nme. this is fun. Bring the 707 now. s is a happy house, we're ahappy here, in the happy house oh this is fun funf unf this i sfun to nme. this is fun. Bring the 707 now",
            contact: {
                email: "abiolamike@gmail.com",
                phone: "0704444444"
            },
            stack : "ReactJS, Solidity, Javascript, Golang",
            industry: "Web Development, Blockchain, web3, web2"
        }
    ]

    return(
        <div className="flex flex-col items-center">
            <h1 className={h1Aboutstyle}>Meet the Project Team</h1>
            <h2 className={h2Aboutstyle}>
                The Project was a collaboration between two young and curious developers looking to explore the possibilities and applications of web3 and decentralization.
            </h2>
            <div className="my-6 sm:my-16 mb-10 lg:w-[75%] md:w-[88%] sm:w-[75%] flex flex-col lg:space-y-16 md:space-y-16 sm:space-y-16">
                {data.map(elem => {
                    return (
                        <div className="flex lg:flex-row md:flex-row sm:flex-col lg:justify-between md:justify-between lg:items-center md:items-start sm:items-center">
                            <img src={Oghenetega} alt="" className="lg:h-[250px] md:h-[190px] sm:h-[180px] lg:w-[250px] md:w-[190px] sm:w-[180px]"/>                            
                            <div className="flex flex-col lg:items-start md:items-start sm:justify-center lg:max-w-[70%] md:max-w-[70%] sm:max-w-[100%]">
                                <h1 className="text-black font-bold lg:text-2xl md:text-2xl sm:text-[18px] font-raleway sm:text-center">{elem.name}</h1>
                                <p className="font-medium sm:text-[16px] sm:text-center">{elem.stack}</p>
                                <div className="flex lg:flex-row md:flex-row sm:flex-col lg:space-x-5 md:space-x-5">
                                    <p className="cursor-pointer text-red-600 lg:font-medium sm:font-light lg:text-[16px] md:text-[16px] sm:text-[16px] lg:my-2 md:my-1 sm:mt-1 sm:mb-1 font-lato text-warp underline sm:text-center">{elem.contact.phone}</p>
                                    <p className="cursor-pointer text-red-600 lg:font-medium sm:font-light lg:text-[16px] md:text-[16px] sm:text-[16px] lg:my-2 md:my-1 sm:mt-1 sm:mb-1 font-lato text-warp underline sm:text-center">{elem.contact.email}</p>
                                </div>
                                <p className="text-black font-light lg:text-[16px] md:text-[16px] sm:text-[16px] lg:my-2 md:my-1 sm:my-2 font-lato text-warp lg:text-left md:text-left sm:text-center">{elem.description}</p>
                                <div className="flex lg:flex-row md:flex-row sm:flex-col lg:justify-start md:justify-start sm:items-center lg:space-x-4 md:space-x-4 lg:space-y-0 md:space-y-0 sm:space-y-4 w-[100%]">
                                    <button className={btnStyle}>Github</button>
                                    <button className={btnStyle}>Download CV</button>
                                    <button className={btnStyle}>Portfolio</button>                                    
                                </div>                            
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const h1Aboutstyle = `text-black font-bold lg:text-4xl md:text-3xl sm:text-xl text-center font-raleway`
const h2Aboutstyle = `text-black lg:font-light sm:font-light lg:text-[18px] md:text-[16px] sm:text-[16px] text-center lg:my-6 md:my-4 sm:mt-2 sm:mb-3 font-lato lg:w-[60%] md:w-[75%] sm:w-[85%] text-warp sm:leading-[20px]`
const btnStyle = `bg-red-600 hover:bg-red-500 text-white py-[0.4rem] rounded-lg font-lato font-bold lg:w-[20%] md:w-[25%] sm:w-[75%] font-bold text-[12px] sm:[14px] uppercase tracking-wide`

export default AboutNew;
