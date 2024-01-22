// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to import the CSS file

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">Zach Angerthal</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/personal">Personal</Link></li>
          <li><Link to="/professional">Professional</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
