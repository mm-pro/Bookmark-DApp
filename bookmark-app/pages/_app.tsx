import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Wallet01 } from "@wallet01/react";
import {
  CoinbaseConnector,
  InjectedConnector,
  WalletconnectConnector,
} from "@wallet01/evm";
import React from "react";
import Header from "../components/layout/Header";

export default function App({ Component, pageProps }: AppProps) {
  const desiredConnectors = [
    new InjectedConnector(),
    new CoinbaseConnector(),
    new WalletconnectConnector(),
  ];

  return (
    <Header>
      <Wallet01 autoConnect={true} connectors={() => desiredConnectors}>
        <Component {...pageProps} />
      </Wallet01>
    </Header>
  );
}
