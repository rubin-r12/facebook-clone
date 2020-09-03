import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://i.ibb.co/bv02CBw/IIIT-hyd.jpg"
        message="Wow! This works!"
        timestamp="This is a timestamp"
        username="rubin-r12"
        image="https://i.ibb.co/JRC4Xsk/haley-carman-c4-Lp-Yfiz-Lvw-unsplash.jpg"
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
