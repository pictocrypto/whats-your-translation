import {
  MediaRenderer,
  ThirdwebNftMedia,
  useContract,
  useContractEvents,
  useValidDirectListings,
  useValidEnglishAuctions,
  Web3Button,
} from "@thirdweb-dev/react";
import React, { useState } from "react";
import Container from "../../../../components/Container/Container";
import { GetStaticProps, GetStaticPaths } from "next";
import { ChainId, NFT, ThirdwebSDK } from "@thirdweb-dev/sdk";
import {
  ETHERSCAN_URL,
  MARKETPLACE_ADDRESS_MEMBERSHIPS,
  NETWORK,
  NFT_COLLECTION_ADDRESS_MEMBERSHIPS,
} from "../../../../const/contractAddresses";
import styles from "../../../../styles/Token.module.css"
import Link from "next/link";
import randomColor from "../../../../util/randomColor";
import Skeleton from "../../../../components/Skeleton/Skeleton";
import toast, { Toaster } from "react-hot-toast";
import toastStyle from "../../../../util/toastConfig";
import GuildIcon from '../../../../public/guild.jpg';
import Image from "next/image";


type Props = {
  nft: NFT;
  contractMetadata: any;
};

const [randomColor1, randomColor2] = [randomColor(), randomColor()];

export default function TokenPage({ nft, contractMetadata }: Props) {
  const [bidValue, setBidValue] = useState<string>();

  // Connect to marketplace smart contract
  const { contract: marketplace, isLoading: loadingContract } = useContract(
    MARKETPLACE_ADDRESS_MEMBERSHIPS,
    "marketplace-v3"
  );

  // Connect to NFT Collection smart contract
  const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS_MEMBERSHIPS);

  const { data: directListing, isLoading: loadingDirect } =
    useValidDirectListings(marketplace, {
      tokenContract: NFT_COLLECTION_ADDRESS_MEMBERSHIPS,
      tokenId: nft.metadata.id,
    });

  // 2. Load if the NFT is for auction
  const { data: auctionListing, isLoading: loadingAuction } =
    useValidEnglishAuctions(marketplace, {
      tokenContract: NFT_COLLECTION_ADDRESS_MEMBERSHIPS,
      tokenId: nft.metadata.id,
    });

  // Load historical transfer events: TODO - more event types like sale
  const { data: transferEvents, isLoading: loadingTransferEvents } =
    useContractEvents(nftCollection, "Transfer", {
      queryFilter: {
        filters: {
          tokenId: nft.metadata.id,
        },
        order: "desc",
      },
    });

  async function createBidOrOffer() {
    let txResult;
    if (!bidValue) {
      toast(`Please enter a bid value`, {
        icon: "❌",
        style: toastStyle,
        position: "bottom-center",
      });
      return;
    }

    if (auctionListing?.[0]) {
      txResult = await marketplace?.englishAuctions.makeBid(
        auctionListing[0].id,
        bidValue
      );
    } else if (directListing?.[0]) {
      txResult = await marketplace?.offers.makeOffer({
        assetContractAddress: NFT_COLLECTION_ADDRESS_MEMBERSHIPS,
        tokenId: nft.metadata.id,
        totalPrice: bidValue,
      });
    } else {
      throw new Error("No valid listing found for this NFT");
    }

    return txResult;
  }

  async function buyListing() {
    let txResult;

    if (auctionListing?.[0]) {
      txResult = await marketplace?.englishAuctions.buyoutAuction(
        auctionListing[0].id
      );
    } else if (directListing?.[0]) {
      txResult = await marketplace?.directListings.buyFromListing(
        directListing[0].id,
        1
      );
    } else {
      throw new Error("No valid listing found for this NFT");
    }
    return txResult;
  }

  


  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Container maxWidth="lg">
        <div className={styles.container}>
          <div className={styles.metadataContainer}>
            <ThirdwebNftMedia
              metadata={nft.metadata}
              className={styles.image}
            />

            <div className={styles.descriptionContainer}>
              <h3 className={styles.descriptionTitle}>Description</h3>
              <p className={styles.description}>{nft.metadata.description}</p>

              
            </div>
          </div>

          <div className={styles.listingContainer}>
            {contractMetadata && (
              <div className={styles.contractMetadataContainer}>
                <MediaRenderer
                  src={contractMetadata.image}
                  className={styles.collectionImage}
                />
                <p className={styles.collectionName}>{contractMetadata.name}</p>
              </div>
            )}
            
   
            <div>

              

            <h1 className={styles.title}>{nft.metadata.name}</h1>

            </div>

            {/*

            <div>

            <a
              href={`https://app.darkblock.io/platform/matic-mumbai/nft/${NFT_COLLECTION_ADDRESS_MEMBERSHIPS}/${nft.metadata.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.myInstagramCta}
            >
              <Image
                src={BooksIcon}
                alt="Books Icon"
                width={30}
                height={30}
                className={styles.instagramIcon}
              />
                  Unlock Your Book
            </a>

            </div>   */}

<a
                  href="https://guild.xyz/pictocrypto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.myInstagramCta}
                >
                  <Image
                    src={GuildIcon}
                    alt="Guild Icon"
                    width={30}
                    height={30}
                    className={styles.instagramIcon} />
                  Discord Access
                </a>

          </div>
        </div>
      </Container>

    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const tokenId = context.params?.tokenId as string;

  const sdk = new ThirdwebSDK(NETWORK);

  const contract = await sdk.getContract(NFT_COLLECTION_ADDRESS_MEMBERSHIPS);

  const nft = await contract.erc1155.get(tokenId);

  let contractMetadata;

  try {
    contractMetadata = await contract.metadata.get();
  } catch (e) {}

  return {
    props: {
      nft,
      contractMetadata: contractMetadata || null,
    },
    revalidate: 1, // https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const sdk = new ThirdwebSDK(NETWORK);

  const contract = await sdk.getContract(NFT_COLLECTION_ADDRESS_MEMBERSHIPS);

  const nfts = await contract.erc1155.getAll();

  const paths = nfts.map((nft) => {
    return {
      params: {
        contractAddress: NFT_COLLECTION_ADDRESS_MEMBERSHIPS,
        tokenId: nft.metadata.id,
      },
    };
  });

  return {
    paths,
    fallback: "blocking", // can also be true or 'blocking'
  };
};
