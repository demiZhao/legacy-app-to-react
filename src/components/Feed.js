import React from "react";
import FeedItem from "./FeedItem";

const Feed = ({ feeds }) => {
  return (
    <div className=" row marketing ">
      {feeds.map((feed) => (
        <FeedItem key={feed.id} feed={feed} ></FeedItem>
      ))}
    </div>
  );
};

export default Feed;
