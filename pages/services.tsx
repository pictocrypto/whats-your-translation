        



import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Script from "next/script";

const Services: NextPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null); // State to track the active tab

  const handleTabClick = (index: number) => {
    if (activeTabIndex === index) {
      setActiveTabIndex(null); // Collapse the content if the same tab is clicked again
    } else {
      setActiveTabIndex(index); // Expand the content of the clicked tab
    }
  };

return (

  
  <div className={styles.container}>

    <div className={styles.heroVideoBackground}>
        <video id="video-background" autoPlay loop muted>
          <source src="https://ipfs.io/ipfs/QmPkxbkCeXrnRhLJNQT56HHkcbhvNDjW9bg2CxYUfAhjq5?filename=output.mp4" type="video/mp4" />
        </video>
    </div>
    
    <div className={styles.heroTitle}>
      <br></br><br></br>
    </div>
   
      <div className={styles.heroTop}><br></br>Services</div>
    
    <div className={styles.tabs}>
      {[
        "עע  Private Web3 Mint Shops & Marketplaces  עע",
        "חח  NFT Gated Communities  חח",
        "וו  Web3 Affiliate Marketplaces  וו",
        "ננ  Subscription Services (Coming Soon)  ננ"
      ].map((tabTitle, index) => (
        <div
          key={index}
          className={`${styles.tab} ${activeTabIndex === index ? styles.activeTab : ""}`}
          onClick={() => handleTabClick(index)}
        >
          {tabTitle}
        </div>
      ))}
    </div>
    <div className={styles.tabContentContainer}>
      {[
        "Let your audience mint your web3 services or offerings directly from your own fully functioning web3 site. Mint new NFT keys or have them view offerings directly from a showcase NFT gallery. Wallet-connected profiles allow users to unlock gated content with ease.",
        "NFT holders connect wallets and can automatically receive exclusive roles in Discord servers, exclusive access to Telegram groups, google docs, GitHub repositories, and more without having to wait for email confirmation or handing over credit card info or other private information.",
        "Duplicate NFT marketplaces with affiliate commissions pre-programmed in provides incentive for your NFT offerings to spread far and wide. An NFT sold in one marketplace is removed from all other marketplaces simultaneously, updated in real time, preventing double sales of the same item and keeping accurate inventory.",
        "Monthly recurring revenue streams generated from podcast subscription, course access, or general consulting. Users purchase subscription NFT and funds are automatically deducted from the wallets on a periodic basis until cancellation. Great for creators looking to escape 10-20% fee other subscription-based service providers charge… coming soon"
      ].map((content, index) => (
        <div key={index} className={styles.tabContentWrapper}>
          <div
            className={`${styles.tabContent} ${styles.transition} ${
              activeTabIndex === index ? styles.activeTabContent : ""
            }`}
          >
            {content}
          </div>
        </div>
      ))}
<br></br>
      <div className={styles.iframecontainer}>       

        <iframe 
          width="360" 
          height="240" 
          src="https://www.youtube.com/embed/uOwqZjUbl7M" 
          >
        </iframe>
      </div>
      <br></br>
     
     <div className={styles.iframecontainer}>
       
        <iframe 
          allowTransparency={true} // Use boolean value instead of a string
          style={{ minHeight: "350px", height: "inherit", overflow: "auto" }} // Use an object for style
          width="100%" 
          id="contactform123" 
          name="contactform123" 
          marginWidth={0} // Use camelCase for attribute names
          marginHeight={0} // Use camelCase for attribute names
          frameBorder={0} // Use camelCase for attribute names
          src="https://form.123formbuilder.com/my-contact-form-6324074.html"
        />
      
      </div> 
   

      
    </div>
  </div>
);
}


export default Services;
