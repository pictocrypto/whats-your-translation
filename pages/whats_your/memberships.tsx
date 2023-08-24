import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../../components/Container/Container";
import NFTGrid from "../../components/06_Memberships/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS_MEMBERSHIPS } from "../../const/contractAddresses";
import styles from "../../styles/Home.module.css";

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS_MEMBERSHIPS);
  const { data, isLoading } = useNFTs(contract);

  return (


    <Container maxWidth="lg">
      <h1 className={styles.heroTitle}>Books</h1>
      
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={
          "Looks like there are no NFTs in this collection. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
        }
      />
    </Container>
  );
}
