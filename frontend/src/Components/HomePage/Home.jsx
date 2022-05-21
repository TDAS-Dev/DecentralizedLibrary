import ImageTest1 from "../../Images/Test01.jpg"
import ImageTest2 from "../../Images/Test02.jpg"
import ImageTest3 from "../../Images/Test03.png"
import ImageTest4 from "../../Images/Test04.png"
import ImageTest5 from "../../Images/Test05.jpg"
import data from "./HomeData"
import { useWeb3ExecuteFunction } from "react-moralis";


function Home() {

    const contractProcessor = useWeb3ExecuteFunction()

    //function to get the array of objects uploaded in the library from the smart contract
    const retrieve = async () => {
        console.log("retireve button clicked")
        const uploadedCIDS = await _getListOfAllUploadedCIDS()
        console.log(uploadedCIDS)
        const metadataArray = []
        for( let i = 0; i < uploadedCIDS.length; i++){
            const element = uploadedCIDS[i]
            const json = await getJSONfiles(element)
            metadataArray.push(json) 
        }
        console.log(metadataArray)
    }

    const _getListOfAllUploadedCIDS = async () => {
        const ABI = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"SharewithExisting","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"SharewithNew","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"SubsequentUpload","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"Upload","type":"event"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"string[]","name":"_newCidsToUpload","type":"string[]"}],"name":"_addTwoArrays","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"string[]","name":"_cidsToShare","type":"string[]"}],"name":"_addTwoArraysShared","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_getListOfAllUploadedCIDS","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"_getListOfUploadedCIDS","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"_getSharedFiles","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string[]","name":"_cidsToShare","type":"string[]"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"_shareWithExisting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string[]","name":"_cidsToShare","type":"string[]"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"_shareWithNew","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_sharedFiles","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string[]","name":"_newCidsToUpload","type":"string[]"}],"name":"_subsequentUpload","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string[]","name":"_cidsToUpload","type":"string[]"}],"name":"_upload","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_uploadedCIDS","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allUploadedFiles","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isAnUploader","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"upLoaders","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"viewBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
        const options = {
            chain: "rinkeby", 
            contractAddress: "0x653857eCaB380c458206C19142310C1a0cA1683F", 
            functionName: "_getListOfAllUploadedCIDS", 
            abi: ABI,
        }
        return await contractProcessor.fetch({
            params: options
        })
    }

    const fetchIPFSDoc = async (ipfsHash) => {
        const url = `https://gateway.moralisipfs.com/ipfs/${ipfsHash}`;
        const response = await fetch(url);
        return await response.json();
      }

    const getJSONfiles = async (CidHashStr) => {
        return await fetchIPFSDoc(CidHashStr) 
    }

    // retrieve()
    
    //dummy data for the test images used during styling
    const images = [
        ImageTest1, ImageTest2, ImageTest3, ImageTest4, ImageTest5
    ]
                                                                                                                                              
    return (
        <div className="">
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
