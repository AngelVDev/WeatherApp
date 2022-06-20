import React from "react";
import Logo from "../img/logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand">
        <Link to="/">
          <img id="logoHenry" src={Logo} alt="" />
          WEATHER REPORT
        </Link>
      </span>
      <SearchBar onSearch={onSearch} />
      <Link to="/about">
        <span>About</span>
      </Link>
    </nav>
  );
}

export default Nav;
