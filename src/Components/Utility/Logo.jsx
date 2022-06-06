import logo from "../../Images/logo.png"

function Logo(){
    return(
        <img className="lg:w-[256px] md:w-[160px] sm:w-[130px] cursor-pointer" src={logo} alt="" />
    )
}

export default Logo;
