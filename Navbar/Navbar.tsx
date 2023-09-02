import { useState } from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export function Navbar() {
  const address = useAddress();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navContainer}>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.navLeft}>
          <div className={styles.navToggle} onClick={handleMenuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={styles.navLogo}>
            <Link href="/" className={`${styles.link} ${styles.navLeft}`}>
              <Image
                src="/wyt.png" // Replace with the path to your home icon image
                alt="Home"
                width={108} // Set the width of the icon image
                height={36} // Set the height of the icon image
              />
            </Link>
          </div>
        </div>

        <div className={styles.navMiddle}>
          <div className={styles.linkContainer}>
            <Link href="/whats_your/art" className={styles.link}>
              Art
            </Link>
            {address && (
              <Link className={`${styles.link} ${styles.profileLink}`} href={`/01_Art/profile/${address}`}>
                <Image
                  className={styles.profileImage}
                  src="/art.gif"
                  width={18}
                  height={18}
                  alt="My Art NFTs"
                />
              </Link>
            )}
          </div>

          {/* Duplicate the above pattern for other main menu links */}
          <div className={styles.linkContainer}>
            <Link href="/whats_your/audio" className={styles.link}>
              Audio
            </Link>
            {address && (
              <Link className={`${styles.link} ${styles.profileLink}`} href={`/02_Audio/profile/${address}`}>
                <Image
                  className={styles.profileImage}
                  src="/music.gif"
                  width={18}
                  height={18}
                  alt="My Audio"
                />
              </Link>
            )}
          </div>

          <div className={styles.linkContainer}>
            <Link href="/whats_your/books" className={styles.link}>
              Books
            </Link>
            {address && (
              <Link className={`${styles.link} ${styles.profileLink}`} href={`/03_Books/profile/${address}`}>
                <Image
                  className={styles.profileImage}
                  src="/book.gif"
                  width={18}
                  height={18}
                  alt="My Books"
                />
              </Link>
            )}
          </div>

          <div className={styles.linkContainer}>
            <Link href="/whats_your/courses" className={styles.link}>
              Courses
            </Link>
            {address && (
              <Link className={`${styles.link} ${styles.profileLink}`} href={`/profile/courses/${address}`}>
                <Image
                  className={styles.profileImage}
                  src="/courses.gif"
                  width={18}
                  height={18}
                  alt="My Courses"
                />
              </Link>
            )}
          </div>

          <div className={styles.linkContainer}>
            <Link href="/whats_your/events" className={styles.link}>
              Events
            </Link>
            {address && (
              <Link className={`${styles.link} ${styles.profileLink}`} href={`/05_Events/profile/${address}`}>
                <Image
                  className={styles.profileImage}
                  src="/events.gif"
                  width={18}
                  height={18}
                  alt="My Events"
                />
              </Link>
            )}
          </div>

          <div className={styles.linkContainer}>
            <Link href="/whats_your/memberships" className={styles.link}>
              Memberships
            </Link>
            {address && (
              <Link className={`${styles.link} ${styles.profileLink}`} href={`/06_Memberships/profile/${address}`}>
                <Image
                  className={styles.profileImage}
                  src="/discord.gif"
                  width={18}
                  height={18}
                  alt="My Festivals"
                />
              </Link>
            )}
          </div>

          <div className={styles.linkContainer}>
            <Link href="/whats_your/video" className={styles.link}>
              Video
            </Link>
            {address && (
              <Link className={`${styles.link} ${styles.profileLink}`} href={`/07_Video/profile/${address}`}>
                <Image
                  className={styles.profileImage}
                  src="/movie.gif"
                  width={18}
                  height={18}
                  alt="My Videos"
                />
              </Link>
            )}
          </div>

          

          {/* Repeat the pattern for other main menu links */}
        
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
          </div>
        </div>
      </nav>
    </div>
  );
}
