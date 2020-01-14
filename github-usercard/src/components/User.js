import React from "react";

const User = ({ user }) => {
  return (
    <div className="user-container">
      <div className="user-card">
        <figure className="uer-img-container">
          <img src={user.avatar_url} alt={user.name} className="user-img" />
        </figure>
        <div className="user-info">
          <h3>
            Name: <span>{user.name}</span>
          </h3>
          <h3>
            User Name: <span>{user.login}</span>
          </h3>
          <h3>
            Location: <span>{user.location}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default User;
