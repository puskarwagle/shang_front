import React, { useState, useRef, useEffect } from 'react';

const Accordion = () => {
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
    <div className="">

      <div className="accorSSS" onClick={toggleHeadPPSak} ref={buttonRefSak}>
        <a className="nav-link" href="#">
          Services
        </a>
      </div>

      <div id="headSS" className={`border ${isExpandedSak ? 'showSS' : 'hideSS'}`} ref={accordionRefSak}>
        <div className="">OPEN sss !!!!!</div>
      </div>

    </div>
  );
};

export default Accordion;
