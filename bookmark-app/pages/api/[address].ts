// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const userAddress = req.query.address;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_NFT_PORT_API_KEY || '',
    },
  };

  await fetch(
    `https://api.nftport.xyz/v0/accounts/${userAddress}?chain=polygon&page_size=50&include=metadata`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500);
      console.error(err);
    });
}
