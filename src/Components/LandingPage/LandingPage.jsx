// import { useState, useEffect } from "react";
import Hero from "./Hero";
import LpCardLeft from "./LpCardLeft";
import LpCardRight from "./LpCardRight";
import Footer from "../Utility/Footer";
import LpImage1 from "../../Images/landingPageImg1.jpg";
import LpImage2 from "../../Images/landingPageImg2.jpg";
import LpImage3 from "../../Images/landingPageImg3.jpg";
import LpImage4 from "../../Images/landingPageImg4.jpg";

function LandingPage({ setMobileNavBar, mobileNavBar }) {
  // const [currentAccount, setCurrentAccount] = useState(null);
  // const checkWalletIsConnected = () => {
  //   const { ethereum } = window;
  //   if (!ethereum) return console.log("Install Metamask");
  //   console.log("Metamask Detected");
  // };

  // const connectWalletHandler = async () => {
  //   const { ethereum } = window;

  //   if (!ethereum) return alert("Please Install Metamask");

  //   try {
  //     const accounts = await ethereum.request({
  //       method: "eth_requestAccounts",
  //     });
  //     console.log("found an account! Address", accounts[0]);
  //     setCurrentAccount(accounts[0]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const mintNftHandler = () => {};
  // const [walletAddress, setWalletAddress] = useState("");
  // const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  // console.log(web3)

  // useEffect(() => {
    // checkWalletIsConnected();
  // }, []);

  return (
    <div className="h-full w-full">
      {/* <button onClick={connectWalletHandler} className="text-lg p-2 rounded dark-gray-500">Test button</button> */}
      {/* <div className="text-gray-700">{currentAccount}</div> */}
      <Hero setMobileNavBar={setMobileNavBar} mobileNavBar={mobileNavBar} />
      <LpCardLeft
        h1="Upload documents to Ipfs,Infura."
        p="One upload, lifetime access to your document at your calling and choice."
        imageSrc={LpImage1}
        imageAlt="Image 01-Landing Page"
      />
      <LpCardRight
        h1="Keep your personal documents private."
        p="Safeguard your private items but retain unlimited access to your document."
        imageSrc={LpImage2}
        imageAlt="Image 02-Landing Page"
      />
      <LpCardLeft
        h1="Share and collaborate with your team."
        p="Share your documents with your teammates and your organization."
        imageSrc={LpImage3}
        imageAlt="Image 03-Landing Page"
      />
      <LpCardRight
        h1="Organize and customize your experience."
        p="Customize your viewing to get the best recommendations and suggestions."
        imageSrc={LpImage4}
        imageAlt="Image 04-Landing Page"
      />
      <Footer />
    </div>
  );
}

export default LandingPage;
