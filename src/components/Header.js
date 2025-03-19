import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Medcare</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search healthcare services" />
          <button>Search</button>
        </div>
        <ul>
          <li><a href="#">Healthcare Services</a></li>
          <li><a href="#">Offers</a></li>
          <li><a href="#">Cart</a></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
