import ImageTest1 from "../../Images/Test01.jpg"
import ImageTest2 from "../../Images/Test02.jpg"
import ImageTest3 from "../../Images/Test03.png"
import ImageTest4 from "../../Images/Test04.png"
import ImageTest5 from "../../Images/Test05.jpg"

function Home() {
    const images = [
        ImageTest1, ImageTest2, ImageTest3, ImageTest4, ImageTest5
    ]

    const data = [
        {
            image : "",
            name : "Wizard's first Rule",
            link : "www.toubvoeejvbfevoofev.com",
            uploader : "0x72c782vg29r26rv8rv0bvr0r8r2r",
            status: "private"
        },
        {
            image : "",
            name : "Revenge of the heckles",
            link : "www.toubvoeejvbfevoofev.com",
            uploader : "0x6vew6wv7wve987wevvwvhdvjwdv8wewvS",
            status: "public"
        },
        {
            image : "",
            name : "Back to Roots",
            link : "www.infura.ceewcvev00dv.com",
            uploader : "0x42nv2442v4v29vrrv8vfw82v2e0v2rvrv2r",
            status: "private"
        },
        {
            image : "",
            name : "Heaven can wait",
            link : "www.ipfs.vewnpweoudd88ddvdudv9ev22e.com",
            uploader : "0x6vew6wvkjbhci086fgx546435esesszze3dv8wewvS",
            status:"public"
        },
        {
            image : "",
            name : "Hoping for the Best",
            link : "www.toubvoeejvbfevoofev.com",
            uploader : "0x6vewxyytycxtx6689wevvwvhdvjwdv8wewvS",
            status: "public"
        }
    ]
                                                                                                                                              
    return (
        <div classname="">
            <div className="flex flex-wrap space-x-10 w-[75%]">
                {data.map((elem, i) => {
                    return (
                        <div key={i} className="bg-gray-600 rounded-lg w-[250px]">
                            <div className="w-[100%] ">
                                <img src={images[i]} alt="" className=""/>
                            </div>
                            <div>
                                <h1 className={h1HomeStyle}>{elem.name}</h1>
                                <p className={pHomeStyle}>{elem.link}</p>
                                <p className={pHomeStyle}>{`Uploaded by ${elem.uploader}`}</p>
                                <p className={pHomeStyle}>{elem.status}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      );
}

const pHomeStyle = `font-medium lg:text-[9px] md:text-[9px] sm:text-[12px] sm:text-center underline text-red-600 cursor-pointer`
const h1HomeStyle = `text-black font-bold lg:text-[14px] md:text-[16px] sm:text-[16px] font-raleway sm:text-center`

export default Home;
