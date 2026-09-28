import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>
          Discover local favorites and explore new flavors with fast, reliable
          delivery.
        </h2>
        <a href="#food-display" className="header-btn">
          view menu
        </a>
      </div>
    </div>
  );
};

export default Header;
