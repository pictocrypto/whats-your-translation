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
            <div className={styles.heroVideoBackgroundInner}>
              <video id="video-background" autoPlay loop muted>
                <source src="https://ipfs.io/ipfs/QmPkxbkCeXrnRhLJNQT56HHkcbhvNDjW9bg2CxYUfAhjq5?filename=output.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
         
          <div className={styles.heroAssetFrame}>
          </div>
          <div className={styles.heroBodyContainer}>
          <img src="wyt.png" width="300" height="120"></img>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                
                </span>
                <br />
              </h1>
              <h2><p className={styles.heroSubtitleWhite}>
                <b>Little Text</b>
              </p></h2>

              <div className={styles.heroCtaContainer}>

                <a
                  href="https://discord.com/invite/VgusjxJMv9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.myInstagramCta}
                >
                  <Image
                    src={DiscordIcon}
                    alt="Discord"
                    width={30}
                    height={30}
                    className={styles.instagramIcon}
                  />
                  Join the Discord
                </a>

                <a
                  href="https://www.youtube.com/channel/UCvMBNvPPJy54mxKIf_Hm5Ag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.myInstagramCta}
                >
                  <Image
                    src={youtubeIcon}
                    alt="Youtube Icon"
                    width={30}
                    height={30}
                    className={styles.instagramIcon}
                  />
                  Youtube
                </a>

                <a
                  href="/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.myInstagramCta}
                >
                  <Image
                    src={servicesIcon}
                    alt="Youtube Icon"
                    width={30}
                    height={30}
                    className={styles.instagramIcon}
                  />
                  Services
                </a>
              
              </div>

              <div>

              <p className={styles.heroSubtitleWhite}>
                <b>PictoCrypto Technology</b>
              </p>

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
                    className={styles.instagramIcon}
                  />
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
                    className={styles.instagramIcon}
                  />
                  Other Techniques
                </a>




              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
