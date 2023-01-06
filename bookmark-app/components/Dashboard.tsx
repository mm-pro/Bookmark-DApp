import React from 'react';
import { useWallet } from "@wallet01/react";

const Dashboard = () => {
  const { address, disconnect } = useWallet();

  return (
    <div className="flex flex-col w-full font-body p-10">
      <button className="btn btn-blue right-0" onClick={() => disconnect()}>Disconnect</button>
      <div className="text-xl align-middle">{`Welcome to the Dashboard, ${address ? address : 'Community Member'}!`}</div>
    </div>
  );
};

export default Dashboard;
