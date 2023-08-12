import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="https://ipfs.io/ipfs/QmeQzRUS63brXq6mMw6Z2pnbeEBwKixSDwQ73hX3xHmgUe?filename=logo.gif"
              width={48}
              height={48}
              alt="Home"
            />
          </Link>

          <div className={styles.navMiddle}>
            <Link href="/buy" className={styles.link}>
            <Image
              src="https://ipfs.io/ipfs/QmXeDg9yXYFAkUAMj2UmsQ9tKbgp4V6x5ZEMXSimDoaTVU?filename=logo2.gif"
              width={48}
              height={48}
              alt="NFTs"
            />
            </Link>


          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
          </div>
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
              <Image
                className={styles.profileImage}
                src="/user-icon.gif"
                width={48}
                height={48}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
