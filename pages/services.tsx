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
                <p><iframe width="560" height="270" src="https://dl.dropboxusercontent.com/s/scklehuiqe0v4xg/Presentation1C.mp4?dl=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </p>
                </span>
                <br />
              </h1>

                

              <div className={styles.tg}>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
