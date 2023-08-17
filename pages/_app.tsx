import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Navbar/Footer";
import NextNProgress from "nextjs-progressbar";
import { NETWORK } from "../const/contractAddresses";
import "../styles/globals.css"; // Import the global styles here
import localFont from '@next/font/local';
import Script from "next/script";

const myFont = localFont({ src: '../public/fonts/Pictocrypto-Regular.woff'})



function MyApp({ Component, pageProps }: AppProps) {

  
  
  return (
    <ThirdwebProvider activeChain={NETWORK} clientId="04fbe9db74c4ffb5b5d2490310ed0e69">
      {/* Progress bar when navigating between pages */}
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      {/* Render the navigation menu above each component */}
      <Navbar />
      {/* Render the actual component (page) */}
      <Component {...pageProps} />
      <Script />

      <Footer />
      

    </ThirdwebProvider>
  );
}

export default MyApp;
