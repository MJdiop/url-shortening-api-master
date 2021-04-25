import { useState } from 'react';
import './_navbar.scss';

import logo from '../images/logo.svg';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <img className="navbar-logo" src={logo} alt="logo" />

      <ul
        className="navbar-nav"
        style={{
          transform: isOpen ? ' translateY(0px)' : ' ',
        }}
      >
        <li>
          <a href="/" className="nav-link">
            Features
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Pricing
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Resources
          </a>
        </li>
      </ul>

      <ul
        className="navbar-nav right"
        style={{
          transform: isOpen ? ' translateY(0px)' : ' ',
        }}
      >
        <li>
          <a href="/" className="nav-link">
            Login
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            sign Up
          </a>
        </li>
      </ul>

      <i
        className="fas fa-bars fa-2x menu"
        onClick={() => setOpen(!isOpen)}
      ></i>
    </nav>
  );
};

export default Navbar;
