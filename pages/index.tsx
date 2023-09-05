import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DiscordIcon from '../public/discord.png';
import youtubeIcon from '../public/youtube.png';
import servicesIcon from '../public/services.gif';
import PictoCryptoIcon from '../public/PICTOCRYPTO.gif';
import SearchIcon from '../public/search.gif';
import MaticIcon from "../public/matic.png";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */

const Home: NextPage = () => {
  return (
    
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          
        <div className={styles.heroVideoBackground}>
              <video id="video-background" autoPlay loop muted>
                <source src="https://ipfs.io/ipfs/QmPkxbkCeXrnRhLJNQT56HHkcbhvNDjW9bg2CxYUfAhjq5?filename=output.mp4" type="video/mp4" />
              </video>
              
        </div>

          <div className={styles.heroAssetFrame}></div>
          <div className="content">
          <div className={styles.heroBodyContainer}>
            <br></br><br></br>
            <img src="wyt.png" width="300" height="120"></img>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                
                <span className={styles.heroTitleGradient}> 
        
                </span>
              </h1>

              <div className={styles.heroCtaContainer}>

                <a
                  href="https://mumbaifaucet.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.myInstagramCta}
                >
                  <Image
                    src={MaticIcon}
                    alt="Matic Icon"
                    width={30}
                    height={30}
                    className={styles.instagramIcon} />
                  Free TestNet Matic
                </a>
              </div>

              <div className={styles.iframecontainer}>
                <div className={styles.liners}>
                  Book Access Demo
                </div>

              <iframe 
                width="360" 
                height="240" 
                src="https://www.youtube.com/embed/DhOyO-h1sGs" 
                >
                </iframe>

              </div>

              <div className={styles.iframecontainer}>
                <div className={styles.liners}>
                  Discord Access Demo
                </div>

              <iframe 
                width="360" 
                height="240" 
                src="https://www.youtube.com/embed/GGLeLFIkVxM" 
                >
                </iframe>

              </div>

              <div className={styles.iframecontainer}>
                <div className={styles.liners}>
                  Event Access Demo
                </div>

              <iframe 
                width="360" 
                height="240" 
                src="https://www.youtube.com/embed/P0iVbwgRwHU" 
                >
                </iframe>

              </div>
              
              {/* Instructions */}

            </div>
          </div></div>
      
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://demo.whatsyourtranslation.com/"/>
      <meta property="og:title" content="What's Your Translation?"/>
      <meta property="og:description" content="Private Web3 Sites, Gated Token Offerings & More"/>
      <meta property="og:image" content="https://ipfs.io/ipfs/QmcPuxR7hxv9jx7Hxi7FWPJLgABuDckWcdchStSjcF2BbE?filename=heyyoumini.png"/>
      <meta property="og:image:width" content="290"/>
      <meta property="og:image:height" content="290"/>

      
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://demo.whatsyourtranslation.com/"/>
      <meta property="twitter:title" content="What's Your Translation?"/>
      <meta property="twitter:description" content="Private Web3 Sites, Gated Token Offerings & More"/>
      <meta property="twitter:image" content="https://ipfs.io/ipfs/QmbHgHmBYTPc6Vtdg6EP29NNsqx7aNT5wPopbEQ6qbHajF?filename=heyyou.png"/>
      
      </div>
    </div>
  </div>
    
  );
};


export default Home;
