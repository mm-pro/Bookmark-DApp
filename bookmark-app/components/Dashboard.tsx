import React, { useEffect, useState } from 'react';
import { useWallet } from "@wallet01/react";
import BookmarkList from './bookmark/BookmarkList';
import { ethers } from 'ethers';

const Dashboard = () => {
  const [ensName, setENSName] = useState<string | null>(null);
  const { address, disconnect } = useWallet();

  useEffect(() => {
    async function getENSName() {
      if (!address) return;
      const provider = await ethers.getDefaultProvider();
      var name = await provider.lookupAddress(address);
      setENSName(name);
    }
    getENSName();
  }, [address]);

  return (
    <div className="flex flex-col w-full font-body p-10">
      <div className="text-xl align-middle">{`Welcome to the Dashboard, ${ensName ? ensName : address}!`}</div>
      <button className="flex btn w-16 content-end" onClick={() => disconnect()}>Disconnect</button>
      <BookmarkList />
    </div>
  );
};

export default Dashboard;
