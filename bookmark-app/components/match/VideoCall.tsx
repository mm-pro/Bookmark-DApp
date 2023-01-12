import React from "react";
import { HuddleIframe, IframeConfig } from "@huddle01/huddle01-iframe";
import ChatView from "../chat/ChatView";

type VideoCallProps = {
  walletAddress: string;
};
export default function VideoCall({ walletAddress }: VideoCallProps) {
  const iframeConfig: IframeConfig = {
    roomUrl: "https://iframe.huddle01.com/123",
    height: "800px",
    width: "80%",
    noBorder: true,
  };

  return (
    <div className="flex flex-col mx-auto h-screen w-screen">
      <div className="text-xl my-5 mx-auto">
        You&apos;ve been matched with: {walletAddress}
      </div>
      <div className="flex flex-row">
        <HuddleIframe config={iframeConfig} />
        <ChatView walletAddress={walletAddress} />
      </div>
    </div>
  );
}
