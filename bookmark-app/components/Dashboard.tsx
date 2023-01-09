import React, { useEffect, useState } from "react";
import { useWallet } from "@wallet01/react";
import BookmarkList from "./bookmark/BookmarkList";
import MatchSignup from "./match/MatchSignup";
import { ethers } from "ethers";

const Dashboard = () => {
  const [ensName, setEnsName] = useState<string | undefined>();
  const { address, disconnect } = useWallet();

  useEffect(() => {
    async function getEnsName() {
      let provider: ethers.providers.Web3Provider;
      if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        if (address && provider) {
          const name = await provider.lookupAddress(address);
          if (name) setEnsName(name);
        }
      }
    }
    getEnsName();
  }, [address]);

  return (
    <div className="flex flex-col w-full font-body p-10">
      <div className="text-xl align-middle">{`Welcome to the Dashboard, ${
        ensName ? ensName : address
      }!`}</div>
      <button
        className="flex btn w-16 content-end"
        onClick={() => disconnect()}
      >
        Disconnect
      </button>
      <MatchSignup />
      <BookmarkList />
    </div>
  );
};

export default Dashboard;
