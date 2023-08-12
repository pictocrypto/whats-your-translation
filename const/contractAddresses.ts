/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Mumbai } from "@thirdweb-dev/chains";
export const NETWORK = Mumbai;

// 2. The addresses of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const ART_MARKETPLACE_ADDRESS = "0x1Ae0fa5a2E22E79336160757B8560f2791B26102";
export const AUDIO_MARKETPLACE_ADDRESS = "0x4b8Cd34dFF95e3Eaac9dfACd71809b1D0670832a";
export const BOOKS_MARKETPLACE_ADDRESS = "0xC6dF3694994e5a977792Dd42e6861D878CaC452a";
export const COURSES_MARKETPLACE_ADDRESS = "0x7d228eDF0c7C78cd462eaFFC46eBd9072c054297";
export const EVENTS_MARKETPLACE_ADDRESS = "0xe7c2CEae4Df7ED49B0d6A529957863FE76c59416";
export const MARKETPLACE_ADDRESS = "0x8cc8c6C6D6DbBb9b0a50C8F1E03A5946f2A2C3bA"; //FESTIVAL
export const VIDEO_MARKETPLACE_ADDRESS = "0xF109677B8Af294e4C858d7ADD2cec4483608c5C4";

//The Addresses of you ERC1155 Collections that go inside the marketplaces
export const ART_COLLECTION_ADDRESS = " ";
export const AUDIO_COLLECTION_ADDRESS = " ";
export const BOOKS_COLLECTION_ADDRESS = "0x1a0eb7F22108AB14d7Ac36e5920D2169b5C8C2BD";
export const COURSES_COLLECTION_ADDRESS = " ";
export const EVENTS_COLLECTION_ADDRESS = " ";
export const FESTIVAL_MARKETPLACE_ADDRESS = " "; //Currently "NFT COLLECTION ADDRESS for now because that was default setting"
export const VIDEO_COLLECTION_ADDRESS = " ";

// 3. The address of your ERC721 NFT collection smart contract. (in this case, it is for art/festival pass)
export const NFT_COLLECTION_ADDRESS = "0xDcc8116Ae3074Fee8ab8615a494B60b52EdD11C9";


//This is the contract address for the great gatsby mint to see if the nfts would appear in all holdings in the profile page
export const Library = "0xE22A3D7F31913411816df2Eb6E15719A4FbE038f";
export const tokenId = "0";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://mumbai.polygonscan.com";
