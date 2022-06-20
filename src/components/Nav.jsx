import React from "react";
import Logo from "../img/logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./styles/Nav.css";

export default function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand">
        <a href="/">
          <img id="logoHenry" src={Logo} alt="" />
        </a>
        <h3 className="headerTitle">WEATHER REPORT</h3>
      </span>
      <SearchBar onSearch={onSearch} />
      <a href="/about">
        <span>About</span>
      </a>
    </nav>
  );
}
