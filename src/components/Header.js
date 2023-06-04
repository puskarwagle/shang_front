import React from 'react';
import '../css/App.css';
import shangLogo from "../images/newSH1.png";
import { IoIosArrowDown } from 'react-icons/io';

function Header() {
  return (
    <nav className="Header navbar navbar-expand-sm px-4 border-bottom">
      <a href="/" ><img className="me-4" src={shangLogo} alt="Shangrila G" height="20" /></a>
      <ul className="navbar-nav border-start ps-4 list-unstyled">
        <li><a className="active text-decoration-none text-reset p-2" href="/about"><span>About</span></a></li>
        <li><a className="text-decoration-none text-reset p-2 text-muted" href=""><span>Products</span> < IoIosArrowDown /></a></li>
        <li><a className="text-decoration-none text-reset p-2 text-muted" href=""><span>Services</span> < IoIosArrowDown /></a></li>
        <li><a className="text-decoration-none text-reset p-2" href="#recentWorks"><span>Projects</span></a></li>
        <li><a className="text-decoration-none text-reset p-2" href="#contact"><span>Contact</span></a></li>

      </ul>
    </nav>
  );
}

export default Header;