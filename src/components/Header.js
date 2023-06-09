// import React from 'react';
import React, { useState, useRef, useEffect } from 'react';
import '../css/App.css';
import shangLogo from "../images/newSH1.png";
import HeaderServices from './HeaderServices';
import HeaderProducts from './HeaderProducts';
// import { IoIosArrowDown } from 'react-icons/io';

function Header() {
  // headerProducts
  const [isExpandedApp, setIsExpandedApp] = useState(false);
  const accordionRefApp = useRef(null);
  const buttonRefApp = useRef(null);
  useEffect(() => {
    document.addEventListener('click', handleClickOutsideApp);
    return () => {
      document.removeEventListener('click', handleClickOutsideApp);
    };
  }, []);
  const handleClickOutsideApp = (event) => {
    if (accordionRefApp.current && !accordionRefApp.current.contains(event.target) && !buttonRefApp.current.contains(event.target)) {
      setIsExpandedApp(false);
    }
  };
  const toggleHeadPPApp = (e) => {
    e.stopPropagation();
    setIsExpandedApp(!isExpandedApp);
  };

  // headerServices
  const [isExpandedSak, setIsExpandedSak] = useState(false);
  const accordionRefSak = useRef(null);
  const buttonRefSak = useRef(null);
  useEffect(() => {
    document.addEventListener('click', handleClickOutsideSak);
    return () => {
      document.removeEventListener('click', handleClickOutsideSak);
    };
  }, []);
  const handleClickOutsideSak = (event) => {
    if (accordionRefSak.current && !accordionRefSak.current.contains(event.target) && !buttonRefSak.current.contains(event.target)) {
      setIsExpandedSak(false);
    }
  };
  const toggleHeadPPSak = (e) => {
    e.stopPropagation();
    setIsExpandedSak(!isExpandedSak);
  };
  return (
    <nav className="Header navbar navbar-expand-lg navbar-light bg-light px-3 border-bottom">
      <a className="navbar-brand align-self-top" href="#">
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

          {/* headerProduct */}
          <li className="nav-item">
            <div className="accorPPP" onClick={toggleHeadPPApp} ref={buttonRefApp}>
              <a className="nav-link" href="#">
                Products
              </a>
            </div>

            <div id="headPP" className={`${isExpandedApp ? 'showPP' : 'hidePP'}`} ref={accordionRefApp}>
                <HeaderProducts/>
            </div>
          </li>

          {/* headerServices */}
          <li className="nav-item">
            <div className="accorSSS" onClick={toggleHeadPPSak} ref={buttonRefSak}>
              <a className="nav-link" href="#">
                Services
              </a>
            </div>

            <div id="headSS" className={`${isExpandedSak ? 'showSS' : 'hideSS'}`} ref={accordionRefSak}>
                <HeaderServices/>
            </div>
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