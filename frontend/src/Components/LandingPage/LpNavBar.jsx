import Logo from "../Utility/Logo"
import Button from "../Utility/Button"
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

function LpNavBar(){
    // const { Moralis } = useMoralis()
    const contractProcessor = useWeb3ExecuteFunction()
    const { authenticate, isAuthenticated } = useMoralis();

    const login = async () => {
        console.log("fired")
        if (!isAuthenticated) {
          await authenticate({signingMessage: "Log in using Moralis" })
            .then(function (user) {
              console.log("logged in user:", user);
              console.log(user.get("ethAddress"));
            })
            .catch(function (error) {
              console.log(error);
            });
        }
    }

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
    
    
    return(
        <div className="flex lg:flex-row md:flex-col sm:flex-col justify-between items-center py-10 px-20">
            <Logo className=""/>
            <Button className="md:hidden sm:hidden  lg:block" name="Connect" onClick="login"/>
            <button className="p-5 bg-red-600" onClick={login}>Login</button>
            <button className="p-5 bg-blue-600" onClick={retrieve}>Retrieve Library</button>
        </div>
    )
}

export default LpNavBar;