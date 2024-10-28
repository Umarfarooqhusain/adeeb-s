import React from "react";
import "../footer/footer.css";
import { Link } from "react-router-dom";
const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER;

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-links">
        {/* Use Link for internal page navigation with descriptive text */}
        <Link to="/" aria-label="Go to Home Page">
          Home
        </Link>
        <Link to="/about" aria-label="Learn more About Us">
          About Us
        </Link>
        <Link to="/gallery" aria-label="View our Gallery">
          Gallery
        </Link>
        <Link to="/contact" aria-label="Contact Us">
          Contact
        </Link>
      </div>
      <div className="footer-socials">
        {/* Use a tag for external links */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>

        <a
          href="https://www.facebook.com/adeeb.hameed.963"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Like us on Facebook"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
