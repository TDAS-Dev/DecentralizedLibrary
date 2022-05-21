
function Hamburger(){
    return(
        <div className="lg:hidden md:hidden sm:block cursor-pointer  sm:absolute left-[25px]">
            <div className="line1 w-[25px] h-[3px] bg-black my-[4px]"></div>
            <div className="line2 w-[25px] h-[3px] bg-black my-[4px]"></div>
            <div className="line3 w-[25px] h-[3px] bg-black my-[4px]"></div>
        </div>
    )
}

export default Hamburger;