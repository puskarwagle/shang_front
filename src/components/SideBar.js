import React, { useState, useEffect } from 'react';
import '../css/SideBar.css';

function SideBar() {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const headerHeight = document.querySelector('.Header').clientHeight;

      let currentSectionId = '';
      sections.forEach((section) => {
        const sectionHeight = section.clientHeight;
        const sectionTop = section.offsetTop - headerHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });

      setCurrentSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    const headerHeight = document.querySelector('.Header').clientHeight;
    const sectionTop = section.offsetTop - headerHeight;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="pe-5" id="navPanel">
      <ul className="navbar-nav text-nowrap ms-2 mt-2">

        <li className="nav-item">
          <a
            className={`nav-link border-start border-4 p-3 ${currentSection === 'recentWorks' ? 'active' : ''}`}
            href="#recentWorks"
            onClick={(e) => handleNavClick(e, '#recentWorks')}
          >
            Recent Works
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link border-start border-4 p-3 ${currentSection === 'exploreTech' ? 'active' : ''}`}
            href="#exploreTech"
            onClick={(e) => handleNavClick(e, '#exploreTech')}
          >
            Explore Tech
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link border-start border-4 p-3 ${currentSection === 'overview' ? 'active' : ''}`}
            href="#overview"
            onClick={(e) => handleNavClick(e, '#overview')}
          >
            Overview
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link border-start border-4 p-3 ${currentSection === 'ourClients' ? 'active' : ''}`}
            href="#ourClients"
            onClick={(e) => handleNavClick(e, '#ourClients')}
          >
            Our Clients
          </a>
        </li>
        {/* ...other menu items */}
      </ul>
    </nav>
  );
}

export default SideBar;
