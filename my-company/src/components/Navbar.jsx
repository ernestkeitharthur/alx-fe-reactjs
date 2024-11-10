// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/services">Services</Link></li> {/* New page */}
      </ul>
    </nav>
  );
}

export default Navbar;
