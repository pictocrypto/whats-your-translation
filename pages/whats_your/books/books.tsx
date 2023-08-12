import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../../../components/Container/Container";
import NFTGrid from "../../../components/NFT/NFTGrid_Books";
import { BOOKS_COLLECTION_ADDRESS } from "../../../const/contractAddresses";
import styles from "../../../styles/Home.module.css";

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(BOOKS_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);

  return (
    <><div className={styles.heroVideoBackground}>
      <div className={styles.heroVideoBackgroundInner}>
        <video id="video-background" autoPlay loop muted>
          <source src="https://ipfs.io/ipfs/QmNnHzzubVzgS4sdg2fR2696YhYWGtqBMsVHu4NUqebqaE?filename=rainbow.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div><Container maxWidth="lg">
        <h1 className={styles.heroTitle}>Browse the Library</h1>
        <p><h2 className={styles.heroSubtitleWhite}><center>Get your book here</center></h2></p>
        <NFTGrid
          data={data}
          isLoading={isLoading}
          emptyText={"Looks like there are no NFTs in this collection. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"} />
      </Container></>
    
  );
}
