import React from "react";
import { HuddleIframe, IframeConfig } from "@huddle01/huddle01-iframe";

export default function VideoCall() {
  const iframeConfig: IframeConfig = {
    roomUrl: "https://iframe.huddle01.com/123",
    height: "600px",
    width: "100%",
    noBorder: false, 
  };

  return (
    <div className="flex flex-col mx-auto h-screen w-screen">
      <div className="text-xl my-5 mx-auto">You've been matched with:</div>
      <HuddleIframe config={iframeConfig} />
    </div>
  );
}
