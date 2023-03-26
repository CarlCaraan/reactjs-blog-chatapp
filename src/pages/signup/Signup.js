import React, { useState } from "react";

// Styles
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDiplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  return (
    <form className="auth-form">
      <h2>Sign Up</h2>
      <label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <span>Email:</span>
      </label>
      <label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <span>Password:</span>
      </label>
      <label>
        <input
          type="text"
          id="name"
          onChange={(e) => setDiplayName(e.target.value)}
          value={displayName}
        />
        <span>Diplay Name:</span>
      </label>
      <label>
        <input type="file" id="image" />
        <span>Profile Thumbnail:</span>
      </label>
      <button className="btn">Sign up</button>
    </form>
  );
}

export default Signup;
