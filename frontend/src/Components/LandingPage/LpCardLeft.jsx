
function LpCardLeft(props){
    return(
        <div className="min-w-screen border-t-10 border-gray-300 flex justify-center">
            <div className="flex justify-between items-center w-[75%] px-20 py-12">
                <div className="max-w-[48%]">
                    <h1 className="text-black font-bold text-5xl text-left font-lato mb-3">{props.h1}</h1>
                    <p className="text-black text-2xl font-light text-left font-lato">{props.p}</p>
                </div>
                <img src={props.imageSrc} alt={props.imageAlt} className="h-auto w-[48%]" />
            </div>
        </div>
    )
}

export default LpCardLeft;