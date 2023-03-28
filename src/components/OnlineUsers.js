import React from "react";

// Custom Hooks
import { useCollection } from "../hooks/useCollection";

// Styles and Components
import "./OnlineUsers.css";
import Avatar from "../components/Avatar";

function OnlineUsers() {
  const { error, documents } = useCollection("users");

  return (
    <div className="user-list">
      <h2>All Users</h2>
      {error && <div className="error">{error}</div>}
      {documents &&
        documents.map((user) => (
          <div className="user-list-item" key={user.id}>
            {user.online && <span className="online-user"></span>}
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}

export default OnlineUsers;
