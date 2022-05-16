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
            uploader : "0x72c782vg29r26rv8rv0bvr0r8r2r"
        },
        {
            image : "",
            name : "Revenge of the heckles",
            link : "www.toubvoeejvbfevoofev.com",
            uploader : "0x6vew6wv7wve987wevvwvhdvjwdv8wewvS"
        },
        {
            image : "",
            name : "Back to Roots",
            link : "www.infura.ceewcvev00dv.com",
            uploader : "0x42nv2442v4v29vrrv8vfw82v2e0v2rvrv2r"
        },
        {
            image : "",
            name : "Heaven can wait",
            link : "www.ipfs.vewnpweoudd88ddvdudv9ev22e.com",
            uploader : "0x6vew6wvkjbhci086fgx546435esesszze3dv8wewvS"
        },
        {
            image : "",
            name : "Hoping for the Best",
            link : "www.toubvoeejvbfevoofev.com",
            uploader : "0x6vewxyytycxtx6689wevvwvhdvjwdv8wewvS"
        }
    ]
                                                                                                                                              
    return (
        <div classname="flex flex-wrap lg:justify-center md:justify-center lg:w-[75%] md:w-[80%] sm:[90%]">
            {data.map((elem, i) => {
                return (
                    <div className="flex">
                        <img src={images[i]} alt="" />
                        <h1>{elem.name}</h1>
                        <p>{elem.link}</p>
                        <p>{elem.uploader}</p>
                    </div>
                )
            })}
        </div>
      );
}

export default Home;