import React, { useState } from "react";
import { HuddleIframe, IframeConfig } from "@huddle01/huddle01-iframe";
import ChatView from "../chat/ChatView";
import { useWallet } from "@wallet01/react";

type VideoCallProps = {
  walletAddress: string;
};
export default function VideoCall({ walletAddress }: VideoCallProps) {
  const [isXmtpClient, setIsXmtpClient] = useState<boolean>(false);
  const { address: userAddress } = useWallet();

  const iframeConfig: IframeConfig = {
    roomUrl: `https://iframe.huddle01.com/${walletAddress}${userAddress}`,
    height: isXmtpClient ? '800px' : '500px',
    width: isXmtpClient ? '70%' : '100%',
    noBorder: true,
  };

  return (
    <div className="flex flex-col mx-auto h-screen w-screen bg-yellow-50 font-body">
      <div className="text-xl my-5 mx-auto">
        You&apos;ve been matched with: {walletAddress}
      </div>
      <div className={`flex ${isXmtpClient ? 'flex-row' : 'flex-col'}`}>
        <ChatView isXmtpClient={isXmtpClient} setIsXmtpClient={setIsXmtpClient} walletAddress={walletAddress} />
        <HuddleIframe config={iframeConfig} />
      </div>
    </div>
  );
}
