import React, { useEffect, useMemo, useState } from "react";
import VideoCall from "../components/match/VideoCall";
import { useWallet } from "@wallet01/react";
import { reduceEachTrailingCommentRange } from "typescript";

export default function Match() {
  const [nftsOwned, setNftsOwned] = useState<any>();
  const { address: userAddress } = useWallet();

  useEffect(() => {
    if (userAddress) {
      fetch(`/api/${userAddress}`)
        .then((response) => response.json())
        .then((response) => setNftsOwned(response));
    }
  }, [userAddress]);

  const getContractOwners = useMemo(() => {
    if (!nftsOwned || !userAddress) return;
    const nftsOwnedArray = nftsOwned?.nfts?.map((value: { creator_address: string }) => {
        return value.creator_address;
      });
    return nftsOwnedArray.filter(function(item: string) {
        return item !== userAddress.toString();
    })
  }, [nftsOwned, userAddress]);

  const randomNumber = Math.floor(Math.random() * getContractOwners?.length);
  const randomAddress = getContractOwners?.[randomNumber];

  return (
    <div className="flex h-screen w-screen">
      <VideoCall walletAddress={randomAddress} />
    </div>
  );
}
