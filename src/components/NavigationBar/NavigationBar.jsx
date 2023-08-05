import React from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { BiHomeHeart } from "react-icons/bi";
import { MdOutlineDescription } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav>
      <h1 className="nav-logo">Trippy</h1>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </div>
      <ul className={isMenuOpen ? "open show" : ""}>
        <li className="nav-menu">
          <Link to="/">
            <BiHomeHeart />
            Home
          </Link>
          <Link to="/aboutpage">
            <MdOutlineDescription />
            About
          </Link>
          <Link to="/servicepage">
            <MdOutlineMiscellaneousServices />
            Service
          </Link>
          <Link to="/contactpage">
            <BiSolidContact />
            Contact
          </Link>
          <button className="sign-in-button">Sign In</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
