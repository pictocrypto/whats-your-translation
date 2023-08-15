import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DiscordIcon from '../public/discord.png';
import youtubeIcon from '../public/youtube.png';
import servicesIcon from '../public/services.gif';
import PictoCryptoIcon from '../public/PICTOCRYPTO.gif';
import SearchIcon from '../public/search.gif';



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
            <img src="wyt.png" width="300" height="120"></img>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                
                <span className={styles.heroTitleGradient}>
        
                </span>
              </h1>
              

              <div>

              </div>
              <div className={styles.heroCtaContainer}>

                <a
                  href="https://www.youtube.com/channel/UCvMBNvPPJy54mxKIf_Hm5Ag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.myInstagramCta}
                >
                  <Image
                    src={PictoCryptoIcon}
                    alt="PICTOCRYPTO Icon"
                    width={30}
                    height={30}
                    className={styles.instagramIcon} />
                  The Pictographs
                </a>
                <a
                  href="/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.myInstagramCta}
                >
                  <Image
                    src={SearchIcon}
                    alt="Youtube Icon"
                    width={30}
                    height={30}
                    className={styles.instagramIcon} />
                  Other Techniques
                </a>
              </div>
              
              {/* Instructions */}

              <div className={styles.instructionsContainer}>
              
                <h2>How to Access Content:</h2>

                  <div className={styles.instructionStep}>
                    <p><b>Step 1:</b> Pick a Category</p>
                    <img src="category.gif" alt="Clicking Category" />

                  </div>

                  <div className={styles.instructionStep}>

                    <p><b>Step 2:</b> Select from Gallery</p>
                    <img src="gallery.gif" alt="Selecting from Gallery" />

                  </div>

                  <div className={styles.instructionStep}>

                    <p><b>Step 3:</b> Buy an NFT Key to Unlock</p>
                    <img src="nft_purchase.gif" alt="NFT Purchase Process" />

                  </div>

                  <div className={styles.instructionStep}>

                    <p><b>Step 4:</b> Go to Your Category Profile and Select Your Item</p>
                    <img src="category_profile.gif" alt="Selecting from Category Profile" />

                  </div>

                  <div className={styles.instructionStep}>

                    <p><b>Step 5:</b> Unlock and Enjoy Content</p>
                    <img src="unlock_content.gif" alt="Unlocking and Enjoying Content" />

                  </div>
              
              

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  );
};


export default Home;
