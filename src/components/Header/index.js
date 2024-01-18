import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <div className="landing-page">
      <nav className="head-con">
        <span className="logo text-3xl font-bold">FixHealth</span>
        <div className="nav-links">
          <Link to="/" className="nav-link" rel="ugc">
            Home
          </Link>
          <Link to="/pricing" className="nav-link" rel="ugc">
            Pricing
          </Link>
          <Link to="/about" className="nav-link" rel="ugc">
            About us
          </Link>
          <Link to="contact" className="nav-link" rel="ugc">
            Contact
          </Link>
        </div>
        <div className="cta-buttons">
          <button className="cta-button">Log in</button>
          <button className="cta-button signup">Sign up</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
