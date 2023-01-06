import React, { useEffect, useState } from "react";
import BookmarkProfile from "./BookmarkProfile";
import * as PushAPI from "@pushprotocol/restapi";
import ReactPaginate from "react-paginate";

const BookmarkList = () => {
  const [number, setNumber] = useState<number>(1);
  const [channelsData, setChannelsData] = useState<any[]>([]);

  useEffect(() => {
    async function getChannelsData() {
      const channelsData = await PushAPI.channels.search({
        query: "push",
        page: number,
        limit: 6,
        env: "staging",
      });
      setChannelsData(channelsData);
    }
    getChannelsData();
  }, [number]);

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
        <div className="flex flex-row">
          <div className="grid grid-cols-6 gap-4">
            {channelsData
              ? channelsData.map((channel) => (
                  <BookmarkProfile
                    key={channel.channel}
                    name={channel.name}
                    address={channel.channel}
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
