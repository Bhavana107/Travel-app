import React, { useState } from "react";
import navCSS from "./Nav.module.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={navCSS.Nav_wrapper}>

      {/* Logo */}
      <div className={navCSS.logo}>
        <a href="#">Travelia.</a>
      </div>

      {/* Desktop Navigation */}
      <ul className={navCSS.desktop_menu}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Trips</a></li>
        <li><a href="#">Destinations</a></li>
        <li><a href="#">Searches</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Popular Destinations</a></li>
      </ul>

      {/* Right Side */}
      <div className={navCSS.nav_btns}>

        {/* Search */}
        <div className={navCSS.search_wrapper}>
          <i className="ri-search-line"></i>
          <input
            type="text"
            placeholder="Search Places"
          />
        </div>

        {/* Call */}
        <div className={navCSS.Call_btn}>
          <i className="ri-phone-line"></i>
          <p>
            +1 1800 25 2202
            <small>Call Your Travel Agent</small>
          </p>
        </div>

        {/* Hamburger */}
        <i
          className={
            menuOpen
              ? "ri-close-line"
              : "ri-menu-2-line"
          }
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className={navCSS.mobile_menu}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Trips</a></li>
          <li><a href="#">Destinations</a></li>
          <li><a href="#">Searches</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Popular Destinations</a></li>
        </ul>
      )}

    </div>
  );
}

export default Nav;