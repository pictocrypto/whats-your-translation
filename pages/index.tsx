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

         

          <div className={styles.heroAssetFrame}>
           
          </div>
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
              
              
              {/* Instructions */}

              
          </div>
        </div>
      </div>
    </div>
  </div>
    
  );
};


export default Home;
