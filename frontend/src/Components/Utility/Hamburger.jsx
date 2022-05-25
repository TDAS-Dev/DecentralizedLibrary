
function Hamburger({setMobileNavBar, mobileNavBar}){
    const navBarHandler = () => {
        console.log("fired")
        if (mobileNavBar) {
            console.log("false")
            setMobileNavBar(false)
        } else {
            setMobileNavBar(true)
            console.log("true")
        }
    }
    return(
        <div className="lg:hidden md:hidden sm:block cursor-pointer sm:absolute left-[25px]" onClick={navBarHandler}>
            <div className={lineStyle}></div>
            <div className={lineStyle}></div>
            <div className={lineStyle}></div>
        </div>
    )
}
const lineStyle = `w-[25px] h-[3px] bg-black m-[2px]`
export default Hamburger;