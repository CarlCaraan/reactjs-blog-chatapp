import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./Navbar.css";
import Temple from "../assets/temple.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="brand-logo" />
          <span>Blogify</span>
        </li>
        <li>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  );
}
