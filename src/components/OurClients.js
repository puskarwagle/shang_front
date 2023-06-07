import '../css/App.css';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import ourClientsImage from '../images/lapC.jpg';

function OurClients() {
  const [ourClients, setOurClients] = useState([])

  useEffect(() => {
    async function getAllourClients() {
      try {
        const ourClients = await axios.get("http://127.0.0.1:8000/api/ourClients/")
        //console.log(ourClients.data);
        setOurClients(ourClients.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllourClients()
  }, [])

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = ourClients.map((ourClient) => (
    <div key={ourClient.id} className="item d-flex flex-column" data-value="1">
    <img style={{ height: '10rem', width: '10rem' }} className="border mb-3" src={ourClientsImage} alt={ourClient.imgalt}/>
      <span style={{fontSize: '1.2rem'}} className='text-muted text-large'>{ourClient.span}</span>
    </div>
  ));

  const Carousel = () => (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      disableDotsControls= "true"
      controlsStrategy="default"
    />
  );

  return (
    <section id="ourClients" className="OurClients">
      <h1>Our Clients</h1>
      <Carousel />
    </section>
  );
}

export default OurClients;
