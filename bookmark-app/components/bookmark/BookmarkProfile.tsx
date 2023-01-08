import React, { useEffect, useMemo, useState } from "react";
import * as PushAPI from "@pushprotocol/restapi";
import { ethers } from "ethers";

type BookmarkProfileProps = {
  name: string;
  channelAddress: string;
  iconLink: string;
  userAddress: string | null;
};

const BookmarkProfile = ({
  name,
  channelAddress,
  iconLink,
  userAddress,
}: BookmarkProfileProps) => {
  const [subscribedChannelsData, setSubscribedChannelsData] = useState<any[]>(
    []
  );

  let provider;
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
  }

  const signer: any = useMemo(() => {
    if (!userAddress || !provider) return;
    return provider.getSigner();
  }, [userAddress]);

  async function getSubscribedChannelsData() {
    const subscriptions = await PushAPI.user.getSubscriptions({
      user: `eip155:5:${userAddress}`,
      env: "staging",
    });
    if (subscriptions) {
      setSubscribedChannelsData(subscriptions);
    }
  }

  useEffect(() => {
    getSubscribedChannelsData();
  }, [])

  const obj = useMemo(() => {
    return subscribedChannelsData.find((o) => o.channel === channelAddress);
  }, [subscribedChannelsData]);

  async function channelOptIn() {
    if (!signer) return;
    const optin = await PushAPI.channels.subscribe({
      signer: signer,
      channelAddress: `eip155:5:${channelAddress}`,
      userAddress: `eip155:5:${userAddress}`,
      onSuccess: async () => {
        await getSubscribedChannelsData();
        console.log("opt in success");
      },
      onError: (e) => {
        console.error(e, "opt in error");
      },
      env: "staging",
    });
    return optin;
  }

  async function channelOptOut() {
    if (!signer) return;
    const optout = await PushAPI.channels.unsubscribe({
      signer: signer,
      channelAddress: `eip155:5:${channelAddress}`,
      userAddress: `eip155:5:${userAddress}`,
      onSuccess: async () => {
        await getSubscribedChannelsData();
        console.log("opt out success");
      },
      onError: () => {
        console.error("opt out error");
      },
      env: "staging",
    });
    optout;
  }

  const shortenedAddress = `${channelAddress.slice(0, 5)}...${channelAddress.slice(channelAddress.length - 4,channelAddress.length)}`
  
  return (
    <div className="flex flex-col justify-center max-w-xs shadow-md rounded-xl px-5 py-10 dark:bg-gray-900 dark:text-gray-100">
      {obj ? (
        <img
          src="/assets/bookmark-filled.svg"
          alt="Subscribe Bookmark icon"
          className="flex w-8 h-8"
          onClick={() => channelOptOut()}
        />
      ) : (
        <img
          src="/assets/bookmark.svg"
          alt="Subscribe Bookmark icon"
          className="flex w-8 h-8"
          onClick={() => channelOptIn()}
        />
      )}
      <img
        src={iconLink}
        alt={`${name} Channel Icon`}
        className="flex w-16 h-16 mx-auto rounded-full dark:bg-gray-500 aspect-square"
      />
      <div className="flex space-y-4 text-center divide-y divide-gray-700">
        <div className="my-2 space-y-1 w-full">
          <h2 className="mx-auto text-lg font-semibold sm:text-2xl">
            {name.slice(0, 15)}
            {name.length > 15 && "..."}
          </h2>
          <p className="text-md dark:text-gray-400">
            {shortenedAddress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookmarkProfile;
