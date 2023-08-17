        



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
        "Unlock a new dimension of online experiences with our Private Web3 Sites. Immerse yourself in a world of exclusive content and connections, protected by the power of NFT-gated access. Gain entry to hidden treasures, premium insights, and personalized interactions, all while embracing the future of the decentralized web.",
        "Join the forefront of digital community engagement through NFT Gated Communities. Connect with like-minded individuals who share your passions and interests, while leveraging the security and uniqueness of NFTs to create an environment where your interactions are valued and protected. Explore the limitless possibilities of decentralized networking today.",
        "Empower your affiliate marketing strategy with our innovative Web3 Affiliate Marketplaces. Harness the potential of decentralized networks to amplify your reach and earnings. Share your custom site seamlessly, and watch as your commissions grow in a borderless digital landscape, where transparency and efficiency redefine the affiliate experience.",
        "Prepare for the future of content consumption with our upcoming Subscription Services. Support your favorite creators sustainably through recurring payments, ensuring they can continue producing the content you love. By embracing Web3 technology, we're reimagining the subscription model to empower creators and provide subscribers with an unparalleled sense of connection and value. Stay tuned for the launch of this exciting feature!"
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
