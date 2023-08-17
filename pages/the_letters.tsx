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
          
      



          <div className={styles.heroAssetFrame}> {/*Put background image here?*/}</div>
  


          <div className={styles.heroBodyContainer}>                
            <div className={styles.heroBody}>


              <br></br>

            

                

              <h1 className={styles.heroTitle}>
              

                

                <br></br>
                The Letters
                <br></br>

                <iframe 
                width="240" 
                height="360" 
                src="https://www.youtube.com/embed/Q7-237LCxrw" 
                >
                </iframe>


        
                <span className={styles.heroTitleGradient}>
                  
        
                </span>
              </h1>

              <div className={styles.heroCtaContainer}>


</div>



<table>
  <thead>
    <tr>
      <th>Letter</th>
      <th>Modern</th>
      <th>English</th>
      <th>Meanings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmXFngNFNhZW7rJ2hT1tHLCdAQWk9AtDkzHGuuEiFoKYSN?filename=045.png" alt="Image" width="80" height="80"></img></td>
      <td>א</td>
      <td>A</td>
      <td>Ox / #1 / Me / Power</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/Qmb6SW3SWVatFchAPKt5isvXJapWWsijv7s9HiAuLNR2hA?filename=046.png" alt="Image" width="80" height="80"></img></td>
      <td>ב</td>
      <td>B</td>
      <td>House / Family / Brain</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmdHDpLCLoVypSrMJ6tptabZJqhRgdqdM1EQZidbPt8jvn?filename=047.png" alt="Image" width="80" height="80"></img></td>
      <td>ג</td>
      <td>G</td>
      <td>Carry / Journey</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmVU3wVKsH27mG5rspsEVLQPVJUDyjpT1u5aQ1ZkhRLt6t?filename=048.png" alt="Image" width="80" height="80"></img></td>
      <td>ד</td>
      <td>D</td>
      <td>Door / Portal</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmXtgDS1wuM82Eii1KgHA51XHyfLDBMnPbsSKfpGYNVvPV?filename=049.png" alt="Image" width="80" height="80"></img></td>
      <td>ה</td>
      <td>H/E</td>
      <td>Hey You! Look Here! / Realization</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmcxZmM8hqrD4biAFhJCS7jCnUUU12qFDd99vsoF62NCit?filename=050.png" alt="Image" width="80" height="80"></img></td>
      <td>ו</td>
      <td>U/OO</td>
      <td>And / Nailed / Joined to...</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmXXPnu2jiL23VQh8Ncg37khHSNfNAQpufSY4444ayW76d?filename=051.png" alt="Image" width="80" height="80"></img></td>
      <td>ז</td>
      <td>Z</td>
      <td>Plant / Plow / Weapon</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmWy3c3dhQAB3dXN1WhoyCWUJnHHUnoVKdkfZKNeHinCw5?filename=052.png" alt="Image" width="80" height="80"></img></td>
      <td>ח</td>
      <td>CH/K</td>
      <td>Fence in (or out)</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmSikz8CEfTsjq8PYzbgAwFDY2UKpXz9Lcwsui1rDTzuGy?filename=053.png" alt="Image" width="80" height="80"></img></td>
      <td>ט</td>
      <td>TH</td>
      <td>Wheel / x's & o's</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmR88GUo8V9vxKWqnCy6gEdMVNwVCudqFTZRvepGanTf94?filename=054.png" alt="Image" width="80" height="80"></img></td>
      <td>י</td>
      <td>Y/I/EE</td>
      <td>Arm / Reaching for...</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmfDJA1oWmVvGqWDvUijzeus87Hw2egKhV6nvcF25PtZg3?filename=055.png" alt="Image" width="80" height="80"></img></td>
      <td>כ</td>
      <td>K</td>
      <td>Smiley Face / Open Palm Allowing...</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmS7WbfJ7bToWxcq8nsuPbLAmUjSpuAfFoqxY5BVumVpjN?filename=056.png" alt="Image" width="80" height="80"></img></td>
      <td>ל</td>
      <td>L</td>
      <td>Candy Cane / Guiding Staff</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmVhMA9XQMytuKY1NNNgLmgC8f1Mbfp55eHxjcy9efh8jK?filename=057.png" alt="Image" width="80" height="80"></img></td>
      <td>מ</td>
      <td>M</td>
      <td>Water / Frequency Waves</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmPfabRrXBkxmg1Fmr5TMwfeTKuAT2xYBZVW2GeG3EMMD2?filename=058.png" alt="Image" width="80" height="80"></img></td>
      <td>נ</td>
      <td>N</td>
      <td>Balloon / Sprout / Seedlings / Profit / Results</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/Qmb8HEQXzuJSzbauq522YBjJtWTH8Za83UAYwFcmX3WYFB?filename=059.png" alt="Image" width="80" height="80"></img></td>
      <td>ס</td>
      <td>S</td>
      <td>Roadmap / Power Pole / Support Structure</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmYM2oPMGdQKHqAMHQgv2foubN3XE8KJScjqTnwrHtedit?filename=060.png" alt="Image" width="80" height="80"></img></td>
      <td>ע</td>
      <td>O</td>
      <td>Eye / Know / Experience / Perceive</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmZVVMQVqCoQVPhnYkEJghkVqfRsxA7dCaWoJW1sEd1AJu?filename=061.png" alt="Image" width="80" height="80"></img></td>
      <td>פ</td>
      <td>P</td>
      <td>Mouth / Speech</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmaqN63ta6tXyzxAkaH6iMtvRRp3zXs6x1vFTpXwsFQ2H1?filename=062.png" alt="Image" width="80" height="80"></img></td>
      <td>צ</td>
      <td>TS</td>
      <td>Hunt / Wait / Desire</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmVjmsvZ8pt3K5D6bja7NPkyLtxkC6JRw7f6W57xpF3ZiC?filename=063.png" alt="Image" width="80" height="80"></img></td>
      <td>ק</td>
      <td>Q</td>
      <td>Horizon / Time / Revolution / Circuit</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmNWXAb5mdFFZJvmZHmFpWrmnMH85vqSePsL5TGKvWoL7w?filename=064.png" alt="Image" width="80" height="80"></img></td>
      <td>ר</td>
      <td>R</td>
      <td>Head / Top / Peak / Mountain</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmZ2i9kYzgznfaskFtAS1SBd9LXY3vqdacHRFyjbtA9Adg?filename=065.png" alt="Image" width="80" height="80"></img></td>
      <td>ש</td>
      <td>SH</td>
      <td>Teeth / Fire</td>
    </tr>
    <tr>
      <td><img src="https://ipfs.io/ipfs/QmRCFMCwssgyidQwVCugJdXyUifP98HgwiFJdRg5Pvwujw?filename=066.png" alt="Image" width="80" height="80"></img></td>
      <td>ת</td>
      <td>T</td>
      <td>The End / "X Marks the Spot" / Goal</td>
    </tr>
  </tbody>
</table>

              

            
             
              

              
          </div>
        </div>
      </div>
    </div>
  </div>
    
  );
};


export default Home;
