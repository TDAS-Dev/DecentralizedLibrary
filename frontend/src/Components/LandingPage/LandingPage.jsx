import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Hero from "./Hero";
import LpCardLeft from "./LpCardLeft";
import LpCardRight from "./LpCardRight";
import Footer from "../Utility/Footer";
import LpImage1 from "../../Images/landingPageImg1.jpg";
import LpImage2 from "../../Images/landingPageImg2.jpg";
import LpImage3 from "../../Images/landingPageImg3.jpg";
import LpImage4 from "../../Images/landingPageImg4.jpg";

function LandingPage({ setMobileNavBar, mobileNavBar }) {
  const [walletAddress, setWalletAddress] = useState("");
  //   const connectToMetamask = () => {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const accounts = await provider.send("eth_requestAccounts", []);
  //     setAddress({ selectedAddress: accounts[0] });
  //   };

  async function connectToMetamask() {
    if (!window.ethereum) return console.log("Metamask not detected");
    console.log("Metamask Detected");
    try {
      //   const accounts = await window.ethereum.request({
      //       method: "eth_requestAccounts"
      //   })
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setWalletAddress(accounts[0]);
      console.log(accounts[0]);
    } catch (error) {
      console.error("Error connecting...");
    }
  }

  async function disconnectMetamask() {
    await window.ethereum.request({
      method: "wallet_requestPermissions",
      params: [{ eth_accounts: {} }],
    });
  }

  return (
    <div className="h-full w-full">
      <Hero
        setMobileNavBar={setMobileNavBar}
        connect={connectToMetamask}
        disconnect={disconnectMetamask}
        mobileNavBar={mobileNavBar}
        address={walletAddress}
      />
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
