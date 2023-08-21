import {
  ThirdwebNftMedia,
  useContract,
  useValidDirectListings,
  useValidEnglishAuctions,
} from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import React from "react";
import {
  MARKETPLACE_ADDRESS_AUDIO,
  NFT_COLLECTION_ADDRESS_AUDIO,
} from "../../../const/contractAddresses";

import styles from "./NFT.module.css";

type Props = {
  nft: NFT;
};

export default function NFTComponent({ nft }: Props) {
  const { contract: marketplace, isLoading: loadingContract } = useContract(
    MARKETPLACE_ADDRESS_AUDIO,
    "marketplace-v3"
  );

  // 1. Load if the NFT is for direct listing
  const { data: directListing, isLoading: loadingDirect } =
    useValidDirectListings(marketplace, {
      tokenContract: NFT_COLLECTION_ADDRESS_AUDIO,
      tokenId: nft.metadata.id,
    });

  // 2. Load if the NFT is for auction
  const { data: auctionListing, isLoading: loadingAuction } =
    useValidEnglishAuctions(marketplace, {
      tokenContract: NFT_COLLECTION_ADDRESS_AUDIO,
      tokenId: nft.metadata.id,
    });
//token ID# taken out here <p className={styles.nftTokenId}>Token ID #{nft.metadata.id}</p> // after metadata name
  return (
    <>
      <ThirdwebNftMedia metadata={nft.metadata} className={styles.nftImage} /> 

      <p className={styles.nftName}>{nft.metadata.name}</p>

      
    </>
  );
}
