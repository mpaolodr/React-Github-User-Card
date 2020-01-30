import React from "react";

const Follower = ({ follower }) => {
  return (
    <div className="follower-card">
      <figure className="follower-img-container">
        <img
          src={follower.avatar_url}
          alt={follower.login}
          className="follower-img"
        />
      </figure>
      <div className="follower-info">
        <h3>
          User Name: <span>{follower.login}</span>
        </h3>
        <h3>
          GH Profile: <span>{follower.url}</span>
        </h3>
      </div>
    </div>
  );
};

export default Follower;
