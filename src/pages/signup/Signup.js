import React, { useEffect, useState } from "react";

// Styles
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDiplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }
    if (!selected.size > 10000) {
      setThumbnailError("Image file size must be less than 10mb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log("thumbnnail updated");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName, thumbnail);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Diplay Name:</span>
        <input
          type="text"
          id="name"
          onChange={(e) => setDiplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>Profile Thumbnail:</span>
        <input type="file" id="image" onChange={handleFileChange} />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      <button className="btn">Sign up</button>
    </form>
  );
}

export default Signup;
