import React from 'react';
import '../css/App.css';
import shangLogo from "../images/newSH1.png";
import { IoIosArrowDown } from 'react-icons/io';

function Header() {
  return (
    <nav className="Header navbar navbar-expand-lg navbar-light bg-light px-3">
      <a className="navbar-brand" href="#">
        <img src={shangLogo} width="50" height="30" alt={'official shangrila logo'}></img>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Products <IoIosArrowDown/></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Service <IoIosArrowDown/></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;