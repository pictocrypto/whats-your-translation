/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Mumbai, Polygon } from "@thirdweb-dev/chains";
export const NETWORK = Mumbai;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0xC6dF3694994e5a977792Dd42e6861D878CaC452a";
export const MARKETPLACE_ADDRESS_ART = "0x1Ae0fa5a2E22E79336160757B8560f2791B26102";
export const MARKETPLACE_ADDRESS_AUDIO = "0x4b8Cd34dFF95e3Eaac9dfACd71809b1D0670832a";
export const MARKETPLACE_ADDRESS_BOOKS = "";
export const MARKETPLACE_ADDRESS_COURSES = "0x7d228eDF0c7C78cd462eaFFC46eBd9072c054297";
export const MARKETPLACE_ADDRESS_EVENTS = "0xe7c2CEae4Df7ED49B0d6A529957863FE76c59416";
export const MARKETPLACE_ADDRESS_FESTIVALS = "";
export const MARKETPLACE_ADDRESS_VIDEO = "0xF109677B8Af294e4C858d7ADD2cec4483608c5C4";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS = "0x1a0eb7F22108AB14d7Ac36e5920D2169b5C8C2BD";
export const NFT_COLLECTION_ADDRESS_ART = "0xDcc8116Ae3074Fee8ab8615a494B60b52EdD11C9";
export const NFT_COLLECTION_ADDRESS_AUDIO = "0x75134192047f7d0970D9c732716432B534E2706f";
export const NFT_COLLECTION_ADDRESS_BOOKS = "";
export const NFT_COLLECTION_ADDRESS_COURSES = "";
export const NFT_COLLECTION_ADDRESS_EVENTS = "";
export const NFT_COLLECTION_ADDRESS_FESTIVALS = "";
export const NFT_COLLECTION_ADDRESS_VIDEO = "";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://polygonscan.com";
