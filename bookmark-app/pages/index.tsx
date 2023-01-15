import React from "react";
import Dashboard from "../components/Dashboard";
import Signup from "../components/Signup";
import WalletButtons from "../components/WalletButtons";
import { useWallet } from "@wallet01/react";

export default function Home() {
  const { isConnected } = useWallet();

  return (
    <div className="flex h-screen w-screen bg-yellow-50">
      {!isConnected ? (
        <div className="flex flex-col m-auto md:flex-row align-middle">
          <Signup />
          <WalletButtons />
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}
