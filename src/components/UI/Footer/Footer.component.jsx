// Import: Dependencies
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Import: Styling
import "./Footer.styles.scss";

// Import: Assets
import { ReactComponent as LogoDark } from "../../../assets/images/logo/logo-dark.svg";

// UI: Footer
function Footer({ open }) {
  // Upon navigation from Footer, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="Footer"
      style={
        open
          ? { filter: "blur(6px)", transition: "filter 0.3s ease-in-out" }
          : null
      }
    >
      <div className="Footer__container">
        <h3 className="Footer__container-title">All things keyboard</h3>
        <div className="Footer__social-media-container">
          <div className="Footer__social-media-item">
            <i className="fab fa-discord"></i>
          </div>
          <div className="Footer__social-media-item">
            <i className="fab fa-twitter"></i>
          </div>
          <div className="Footer__social-media-item">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="Footer__social-media-item">
            <i className="fab fa-facebook-square"></i>
          </div>
          <div className="Footer__social-media-item">
            <i className="fab fa-youtube"></i>
          </div>
        </div>
        <div className="Footer__short-link-container">
          <div className="Footer__short-links">
            <h4>Shop</h4>
            <ul>
              <li>Keyboards</li>
              <li>Artisans</li>
              <li>Switches</li>
              <li>Cables</li>
            </ul>
          </div>
          <div className="Footer__short-links">
            <Link to="/keyboard-guide">
              <h4>Guide</h4>
            </Link>
            <ul>
              <li>Keyboard types</li>
              <li>PCBs</li>
              <li>Plates</li>
              <li>Cases</li>
              <li>Switches</li>
              <li>Keycaps</li>
              <li>Lube</li>
              <li>How to build</li>
            </ul>
          </div>
          <div className="Footer__short-links">
            <h4>Community</h4>
            <ul>
              <li>Introductions</li>
              <li>FAQ</li>
              <li>Group buys</li>
              <li>Trade</li>
              <li>Sell with rizji</li>
            </ul>
          </div>
          <div className="Footer__short-links">
            <h4>Contact</h4>
            <ul>
              <li>Introductions</li>
              <li>FAQ</li>
              <li>Group buys</li>
              <li>Trade</li>
              <li>Sell with rizji</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="Footer__logo-container">
          <Link to="/">
            <LogoDark />
          </Link>
          <div className="Footer__cta">
            <span>Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export: Footer
export default Footer;
