import {
  useContract,
  useOwnedNFTs,
  useValidDirectListings,
  useValidEnglishAuctions,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Container from "../../../components/Container/Container";
import ListingWrapper from "../../../components/06_Memberships/ListingWrapper/ListingWrapper";
import NFTGridOwned from "../../../components/06_Memberships/NFT/NFTGridOwned";
import Skeleton from "../../../components/Skeleton/Skeleton";
import {
  MARKETPLACE_ADDRESS_MEMBERSHIPS,
  NFT_COLLECTION_ADDRESS_MEMBERSHIPS,
} from "../../../const/contractAddresses";
import styles from "../../../styles/Profile.module.css";
import randomColor from "../../../util/randomColor";

const [randomColor1, randomColor2, randomColor3, randomColor4] = [
  randomColor(),
  randomColor(),
  randomColor(),
  randomColor(),
];

export default function ProfilePage() {
  const router = useRouter();
  const [tab, setTab] = useState<"nfts" | "listings" | "auctions">("nfts");

  const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS_MEMBERSHIPS);

  const { contract: marketplace } = useContract(
    MARKETPLACE_ADDRESS_MEMBERSHIPS,
    "marketplace-v3"
  );

  const { data: ownedNfts, isLoading: loadingOwnedNfts } = useOwnedNFTs(
    nftCollection,
    router.query.address as string
  );

  const { data: directListings, isLoading: loadingDirects } =
    useValidDirectListings(marketplace, {
      seller: router.query.address as string,
    });

  const { data: auctionListings, isLoading: loadingAuctions } =
    useValidEnglishAuctions(marketplace, {
      seller: router.query.address as string,
    });

  return (
    <Container maxWidth="lg">
      <div className={styles.profileHeader}>
        <div
          className={styles.coverImage}
          style={{
            background: `linear-gradient(90deg, ${randomColor1}, ${randomColor2})`,
          }}
        />
        <div
          className={styles.profilePicture}
          style={{
            background: `linear-gradient(90deg, ${randomColor3}, ${randomColor4})`,
          }}
        />
        <h1 className={styles.profileName}>
          {router.query.address ? (
            router.query.address.toString().substring(0, 4) +
            "..." +
            router.query.address.toString().substring(38, 42)
          ) : (
            <Skeleton width="320" />
          )}
        </h1>
      </div>

      <div className={styles.tabs}>
        <h3
          className={`${styles.tab} 
        ${tab === "nfts" ? styles.activeTab : ""}`}
          onClick={() => setTab("nfts")}
        >
          My Keys
        </h3>
        {/*
        <h3
          className={`${styles.tab} 
        ${tab === "listings" ? styles.activeTab : ""}`}
          onClick={() => setTab("listings")}
        >
          Listings
        </h3>
          */}
      </div>

      <div
        className={`${
          tab === "nfts" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <NFTGridOwned
          data={ownedNfts}
          isLoading={loadingOwnedNfts}
          emptyText="Nothing found in your wallet right now. You're welcome to explore offerings from our menu above."
        />
      </div>

      <div
        className={`${
          tab === "listings" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        {loadingDirects ? (
          <p>Loading...</p>
        ) : directListings && directListings.length === 0 ? (
          <p>Nothing for sale yet! Head to the sell tab (green marble) to list an NFT for sale or access bonus NFT content "here"</p>
        ) : (
          directListings?.map((listing) => (
            <ListingWrapper listing={listing} key={listing.id} />
          ))
        )}
      </div>

      
    </Container>
  );
}
