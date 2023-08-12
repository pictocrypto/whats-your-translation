import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";


/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroAssetFrame}>
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                The Letters
                </span>
                <br />
              </h1>
              <p className={styles.heroSubtitleWhite}>
                <b>A simple disclaimer here, the descriptions here are obviously in no way the absolute definition in what these letters can mean. This is simply an exercise in creativity. There are many more meanings that can be assigned to the letters that cannot be contained here, but what they can do is give you a quick, and easy-to-comprehend frame of reference to go back to. You may find many more meanings on your own and that's perfectly fine. Just remember, what you see in these letters will simply be a reflection of what's inside your own heart, so it's a good way to check how you are currently seeing the world around yourself, and others, and gives you options as to where you may like to go from there.</b>
              </p>

              <div className={styles.tg}>
                

                <table>
                  <thead>
                    <tr>
                      <th>Pictograph</th>
                      <th>Modern</th>
                      <th>English Equivalent</th>
                      <th>Meanings</th>
                    </tr>
                  </thead>
                  <tbody className={styles.tg}>
                    <tr>
                      <td><img src="045.png" alt="Image" width="100" height="100"></img></td>
                      <td>א</td>
                      <td>A</td>
                      <td>Ox / #1 / Me / Power</td>
                    </tr>
                    <tr>
                      <td><img src="046.png" alt="Image" width="100" height="100"></img></td>
                      <td>ב</td>
                      <td>B</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="047.png" alt="Image" width="100" height="100"></img></td>
                      <td>ג</td>
                      <td>G</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="048.png" alt="Image" width="100" height="100"></img></td>
                      <td>ד</td>
                      <td>D</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="049.png" alt="Image" width="100" height="100"></img></td>
                      <td>ה</td>
                      <td>H/E</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="050.png" alt="Image" width="100" height="100"></img></td>
                      <td>ו</td>
                      <td>U/OO</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="051.png" alt="Image" width="100" height="100"></img></td>
                      <td>ז</td>
                      <td>Z</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="052.png" alt="Image" width="100" height="100"></img></td>
                      <td>ח</td>
                      <td>CH/K</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="053.png" alt="Image" width="100" height="100"></img></td>
                      <td>ט</td>
                      <td>TH</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="054.png" alt="Image" width="100" height="100"></img></td>
                      <td>י</td>
                      <td>Y/I/EE</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="055.png" alt="Image" width="100" height="100"></img></td>
                      <td>כ</td>
                      <td>K</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="056.png" alt="Image" width="100" height="100"></img></td>
                      <td>ל</td>
                      <td>L</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="057.png" alt="Image" width="100" height="100"></img></td>
                      <td>מ</td>
                      <td>M</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="058.png" alt="Image" width="100" height="100"></img></td>
                      <td>נ</td>
                      <td>N</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="059.png" alt="Image" width="100" height="100"></img></td>
                      <td>ס</td>
                      <td>S</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="060.png" alt="Image" width="100" height="100"></img></td>
                      <td>ע</td>
                      <td>O</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="061.png" alt="Image" width="100" height="100"></img></td>
                      <td>פ</td>
                      <td>P</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="062.png" alt="Image" width="100" height="100"></img></td>
                      <td>צ</td>
                      <td>TS</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="063.png" alt="Image" width="100" height="100"></img></td>
                      <td>ק</td>
                      <td>Q</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="064.png" alt="Image" width="100" height="100"></img></td>
                      <td>ר</td>
                      <td>R</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="065.png" alt="Image" width="100" height="100"></img></td>
                      <td>ש</td>
                      <td>SH</td>
                      <td>Text 6</td>
                    </tr>
                    <tr>
                      <td><img src="066.png" alt="Image" width="100" height="100"></img></td>
                      <td>ת</td>
                      <td>T</td>
                      <td>Text 6</td>
                    </tr>
                  </tbody>
                  </table>

                
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
