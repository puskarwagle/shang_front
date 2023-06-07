import '../css/App.css';
import React, { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import overviewImage from '../images/overview/co3.jpg';

function Overviews() {
  const [overviews, setOverviews] = useState([]);
  const [activeOverviewId, setActiveOverviewId] = useState(null);

  useEffect(() => {
    async function getAllOverviews() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/overviews/");
        setOverviews(response.data);
        if (response.data.length > 0) {
          setActiveOverviewId(response.data[0].id); // Set the first overview as active initially
        }
      } catch (error) {
        console.log(error);
      }
    }
    getAllOverviews();
  }, []);

  const overUlLiFocus = {
    border: '2px solid cornflowerblue',
    fontWeight: '800'
  };
  const overUlLiHover = {
    boxShadow: 'inset 0px -2px 0px 0px cornflowerblue'
  };
  const aHover = {
    textDecoration: 'underline !important'
  };

  const handleLiClick = (overviewId) => {
    setActiveOverviewId(overviewId);
  };

  return (
    <section id="overview" className="Overviews">
      <h1>Overviews</h1>
      <ul id="overview-list" className="mb-3 p-2 d-flex justify-content-around list-unstyled border-bottom">
        {overviews.map((overview) => (
          <li
            key={overview.id}
            style={{
              fontSize: '1.2rem',
              ...(overview.id === activeOverviewId && overUlLiFocus),
            }}
            className='px-2 py-2 text-muted'
            onClick={() => handleLiClick(overview.id)}
          >
            {overview.titleLi}
          </li>
        ))}
      </ul>
      {overviews.map((overview) => (
        <div
          key={overview.id}
          className={`inOverview d-flex border ${overview.id === activeOverviewId ? 'active' : 'd-none'}`}
        >
          <div className='col-md-6 col-lg-6 border'>
            <img
              src={overviewImage}
              alt={overview.imgalt}
              style={{ height: '15rem', width: '100%' }}
              className="img-responsive"
            />
          </div>
          <div className="col-md-6 col-lg-6 border inOverviewText d-flex flex-column justify-content-around pt-4 px-5">
            <h4>{ overview.text1 }</h4>
            <span className="mb-4">{ overview.text2 }</span><br/>
            <a href='{ overview.text3 }' className="text-nowrap pe-1 text-decoration-none">{overview.text3}</a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Overviews;
