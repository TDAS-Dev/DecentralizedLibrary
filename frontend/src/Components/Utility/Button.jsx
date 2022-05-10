
function Button(props){
    const btnStyle = `bg-red-600 hover:bg-red-500 text-white px-12 py-[0.4rem] rounded-md font-lato font-bold tracking-wide${props.className}`
    return(
        <button className={btnStyle}>{props.name}</button>
    )
}

export default Button;