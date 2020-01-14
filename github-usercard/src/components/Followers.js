import React from "react";

import Follower from "./Follower";

const Followers = ({ userFollowers }) => {
  return (
    <div className="followers-container">
      {userFollowers.map(follower => {
        return <Follower key={follower.id} follower={follower} />;
      })}
    </div>
  );
};
export default Followers;
