import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Wallet01 } from "@wallet01/react";
import {
  CoinbaseConnector,
  InjectedConnector,
  WalletconnectConnector,
} from "@wallet01/evm";

export default function App({ Component, pageProps }: AppProps) {
  const desiredConnectors = [
    new InjectedConnector(),
    new CoinbaseConnector(),
    new WalletconnectConnector(),
  ];

  return (
    <Wallet01 autoConnect={true} connectors={() => desiredConnectors}>
      <Component {...pageProps} />
    </Wallet01>
  );
}
