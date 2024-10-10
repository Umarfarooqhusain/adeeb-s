import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../header/header.css";
import hamburger from "../../assets/images/hamburger.svg";
import closeIcon from "../../assets/images/close.svg"; // Add a cross (close) icon
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header">
      <nav>
        <ul className="desktop-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Hamburger Icon */}
      <button
        className="hamburger-icon"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isSidebarOpen}
        aria-controls="sidebarMenu"
      >
        <img
          src={isSidebarOpen ? closeIcon : hamburger}
          alt={isSidebarOpen ? "Close menu" : "Open menu"}
        />
      </button>
      {/* Sidebar */}
      <aside
        id="sidebarMenu"
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        role="complementary"
        aria-hidden={!isSidebarOpen}
      >
        <ul>
          <li>
            <Link to="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={toggleSidebar}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleSidebar}>
              Contact
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Header;
