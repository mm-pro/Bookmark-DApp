import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';

type BookmarkProfileProps = {
  name: string;
  address: string;
  iconLink: string;
};

const BookmarkProfile = ({ name, address, iconLink }: BookmarkProfileProps) => {
  const [ensName, setENSName] = useState<string | null>(null);

  useEffect(() => {
    async function getENSName() {
      const provider = await ethers.getDefaultProvider();
      var name = await provider.lookupAddress(address);
      setENSName(name);
    }
    getENSName();
  }, [address]);

  const shortenedAddress = `${address.slice(0, 5)}...${address.slice(address.length - 4,address.length)}`
  
  return (
    <div className="flex flex-col justify-center max-w-xs shadow-md rounded-xl px-5 py-10 dark:bg-gray-900 dark:text-gray-100">
      <img
        src={iconLink}
        alt={`${name} Channel Icon`}
        className="flex w-16 h-16 mx-auto rounded-full dark:bg-gray-500 aspect-square"
      />
      <div className="flex space-y-4 text-center divide-y divide-gray-700">
        <div className="my-2 space-y-1 w-full">
          <h2 className="mx-auto text-lg font-semibold sm:text-2xl">{name.slice(0,15)}{name.length > 15 && '...'}</h2>
          <p className="text-md dark:text-gray-400">
            {ensName ? ensName : shortenedAddress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookmarkProfile;
