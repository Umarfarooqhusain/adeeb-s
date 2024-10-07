// import React from "react";
// import "../header/header.css";
// import { Link } from "react-router-dom";
// import hamburger from "../../assets/images/hamburger.svg";

// const Header = () => {
//   return (
//     <header className="header">
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/blog">Gallery</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//       <img src={hamburger} alt="ham menu" />
//     </header>
//   );
// };

// export default Header;
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
            <Link to="/blog">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Hamburger Icon */}
      <img
        src={isSidebarOpen ? closeIcon : hamburger}
        alt="menu"
        className="hamburger-icon"
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
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
            <Link to="/blog" onClick={toggleSidebar}>
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
