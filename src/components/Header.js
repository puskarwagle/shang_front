import React from 'react';
import '../css/App.css';
import shangLogo from "../images/newSH1.png";
import { IoIosArrowDown } from 'react-icons/io';

function Header() {
  return (
    <nav className="Header navbar navbar-expand-sm px-4 border-bottom">
      <a href="/" ><img className="me-4" src={shangLogo} alt="Shangrila G" height="25" /></a>
      <ul className="navbar-nav border-start ps-4 list-unstyled">
        <li>
          <a className="active text-decoration-none text-reset p-3"  style={{fontSize: '1.3rem'}} href="/about">
            <span className="text-muted">About</span>
          </a>
        </li>
        <li>
          <a className="text-decoration-none text-reset p-3"  style={{fontSize: '1.3rem'}} href="">
            <span className="text-muted">Products</span> <i className="text-muted">< IoIosArrowDown /></i>
          </a>
        </li>
        <li>
          <a className="text-decoration-none text-reset p-3"  style={{fontSize: '1.3rem'}} href="">
            <span className="text-muted">Services</span> <i className="text-muted">< IoIosArrowDown /></i>
          </a>
        </li>
        <li>
          <a className="text-decoration-none text-reset p-3"  style={{fontSize: '1.3rem'}} href="#recentWorks">
            <span className="text-muted">Projects</span>
          </a>
        </li>
        <li>
          <a className="text-decoration-none text-reset p-3"  style={{fontSize: '1.3rem'}} href="#contact">
            <span className="text-muted">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;