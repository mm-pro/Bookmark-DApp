import React, { useEffect, useState } from "react";
import BookmarkProfile from "./BookmarkProfile";
import * as PushAPI from "@pushprotocol/restapi";
import ReactPaginate from "react-paginate";
import { useWallet } from "@wallet01/react";

const BookmarkList = () => {
  const { address } = useWallet();
  const [number, setNumber] = useState<number>(1);
  const [query, setQuery] = useState<string>('push');
  const [currentInput, setCurrentInput] = useState<string>('');
  const [channelsData, setChannelsData] = useState<any[]>([]);

  useEffect(() => {
    async function getChannelsData() {
      const channelsData = await PushAPI.channels.search({
        query: query,
        page: number,
        limit: 6,
        env: "staging",
      });
      setChannelsData(channelsData);
    }
    getChannelsData();
  }, [query, number, setChannelsData]);

  const handlePageClick = (event: {
    selected: number;
  }) => {
    setNumber(event.selected + 1);
  };

  return (
    <div className="flex flex-col">
      <h1 className="mt-5 mb-2 text-lg">
        Bookmark the communities and people who matter most
      </h1>
      <div className="flex flex-col">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input onInput={(e) => setCurrentInput((e.target as HTMLInputElement).value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for channels" required />
        <button onClick={() => setQuery(currentInput)} type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
        <div className="flex flex-row">
          <div className="mt-5 grid grid-cols-6 gap-4">
            {channelsData
              ? channelsData.map((channel) => (
                  <BookmarkProfile
                    key={channel.channel}
                    name={channel.name}
                    channelAddress={channel.channel}
                    userAddress={address}
                    iconLink={channel.icon}
                  />
                ))
              : "Waiting for channels data"}
          </div>
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={5}
          previousLabel="< previous"
          className="flex flex-row gap-2 mt-5"
        />
      </div>
    </div>
  );
};

export default BookmarkList;
