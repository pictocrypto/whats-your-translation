import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Footer() {
  

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navRight}>

          
        <Link href="/pictocrypto" className={styles.link}>
            <Image
              src="/PICTOCRYPTO.gif"
              width={25}
              height={25}
              alt="Home"
            />
          </Link>
          
          
          
          <Link href="/services" className={styles.link}>
            <Image
              src="/services.gif"
              width={25}
              height={25}
              alt="Home"
            />
          </Link>

         
            <Link href="https://discord.com/invite/VgusjxJMv9" className={styles.link} target="blank">
            <Image
              src="/discord.png"
              width={25}
              height={25}
              alt="NFTs"
            />
            </Link>

            <Link href="https://www.youtube.com/@whatsyourtranslation" className={styles.link} target="blank">
            <Image
              src="/youtube.png"
              width={27}
              height={20}
              alt="NFTs"
            />
            </Link>


          
        </div>

       
      </nav>
    </div>
  );
}
