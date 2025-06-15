import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi'; // Hamburger icon from react-icons
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu
  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
  };

  // Close menu when clicking a link (optional)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      {/* Hamburger menu icon, visible on mobile */}
      <div className="navbar-hamburger" onClick={handleMenuToggle} aria-label="Toggle menu" role="button" tabIndex={0}>
        <GiHamburgerMenu />
      </div>

      {/* Navbar links, toggled open/close on mobile */}
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>

      {/* Theme toggle icon */}
      <div className="theme-icon" onClick={toggleDarkMode} role="button" tabIndex={0} aria-label="Toggle dark mode">
        {darkMode ? <FaSun /> : <FaMoon />}
      </div>
    </nav>
  );
};

export default Navbar;
