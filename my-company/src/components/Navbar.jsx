// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <ul style={{
        listStyleType: 'none',
        display: 'flex',
        gap: '20px',
        justifyContent: 'center', // Centers the links horizontally
        margin: 0, // Removes default margin
        padding: 0, // Removes default padding
      }}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
        <li><Link to="/services" style={linkStyle}>Services</Link></li> {/* New page */}
      </ul>
    </nav>
  );
}

// Link styling to change the default link appearance
const linkStyle = {
  color: '#fff', // White text color
  textDecoration: 'none', // Removes the underline
  fontSize: '18px', // Font size
};

export default Navbar;
