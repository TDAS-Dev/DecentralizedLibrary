import {useState} from "react"
import Card from "./Card";
import Data from "./data/HomeData"
import {Link} from "react-router-dom"
import {FaArrowCircleLeft, FaArrowAltCircleRight} from "react-icons/fa"
import Image from "./data/Img"

const Main = () => {
  const [counter, setCounter] = useState(0)

  function previousSlide(){
    let size = Image.length - 1;
     (counter < size) ? setCounter(size) :
    setCounter(counter - 1)
    console.log(Image[counter])
    console.log(counter - 1)
  }

  function nextSlide(){
    let size = Image.length - 1;
    (counter === size) ? setCounter(0):
    setCounter(counter + 1)
    console.log(Image[counter])
    console.log(counter + 1)
  }

  return (
    <div className="container w-full flex flex-col">
      <section className="">
        <div className="flex justify-between items-center">
        <h2 className="text-2xl my-2">New Uploads</h2>
        <div className="flex space-x-6">
          <FaArrowCircleLeft onClick={previousSlide} size={24} className="cursor-pointer text-blue-500 text-2xl hover:text-blue-600 "/>
          <FaArrowAltCircleRight onClick={nextSlide} size={24} className="cursor-pointer text-blue-500 text-2xl hover:text-blue-600 "/>
        </div>
        </div>
        {
          Image.length > 0 ?
          <img
          src={Image[counter]}
          alt=""
          className="w-full h-[350px]"
        />
          :
        <img
          src="https://tinyurl.com/mvnamm6s"
          alt=""
          className="w-full h-[350px]"
        />
        }
      </section>
      <section className="my-2">
        <h2 className="text-2xl my-2">Public</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
          {
            Data.length > 0 ?
            Data.map((data, index) =>(
              <Card key={index} className="break-normal shadow-blue-400">
                <img
                  src="https://tinyurl.com/ued8wzz6"
                  alt="image"
                  className="w-full"
                />
                <div className="px-3 py-2">
                  <h2 className="text-lg truncate">{data.name}</h2>
                  <div className="text-sm truncate">{data.uploader}</div>
                  <span className="text-sm text-gray-600">{data.status}</span>
                  <div>
                    <Link to={data.link} className="text-blue-500 float-right hover:text-blue-600 my-2 py-2 px-3 rounded">Learn More</Link></div>
                </div>
              </Card>
            ))
            :
              <div className="text-center py-3 text-gray-600">No public file</div>
          }

          {/* <Card className="">
            <img
              src="https://tinyurl.com/ued8wzz6"
              alt="image"
              className="w-full"
            />
            <div className="px-3 py-2">
              <h2 className="text-lg">Minimal Photography</h2>
              <div className="text-sm">By Abiola</div>
              <span>6.3K views | 1 hours ago</span>
            </div>
          </Card> */}
        </div>
      </section>
    </div>
  );
};

export default Main;
