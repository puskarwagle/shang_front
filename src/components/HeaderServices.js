import '../css/App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HeaderServices() {
  const [headerServices, setHeaderServices] = useState([]);

  useEffect(() => {
    async function getAllHeaderServices() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/headerServices/");
        setHeaderServices(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllHeaderServices();
  }, []);

  const handleLiClick = (index) => {
    setHeaderServices((prevServices) => {
      return prevServices.map((service, i) => {
        if (i === index) {
          return {
            ...service,
            active: true
          };
        } else {
          return {
            ...service,
            active: false
          };
        }
      });
    });
  };

  return (
    <div className="headerMain headerServ">
      <ul className="hMA list-unstyled pt-4 pb-4 ps-4">
        {headerServices.map((headerService, index) => (
          <li
            key={headerService.id}
            className={`text-nowrap p-1 ${headerService.active ? 'hmaactive' : ''}`}
            onClick={() => handleLiClick(index)}
          >
            {headerService.title}
          </li>
        ))}
      </ul>
      {headerServices.map((headerService) => (
        <div
          key={headerService.id}
          className={`hMB ${headerService.active ? 'hmbActive' : 'hmbPassive'}`}
        >
          <div className="hMBFirst">
            <span>
              {headerService.title} <i className="fas fa-arrow-right"></i>
            </span>
            <span>{headerService.title_text}</span>
          </div>
          <div className="hMBTexts">
            {headerService.subTT && headerService.subTT.map((subT) => (
                <div key={subT.id} className="hMBText">
                  <span>{subT.title}</span>
                  <span>{subT.text}</span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeaderServices;
