
function Button(props){
    const btnStyle = `bg-red-600 hover:bg-red-500 text-white px-8 py-[0.2rem] rounded-full${props.className}`
    return(
        <button className={btnStyle}>{props.name}</button>
    )
}

export default Button;