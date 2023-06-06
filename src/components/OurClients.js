import '../css/App.css';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import image from '../images/ourClients/1684314865.png';

function OurClients() {
  const [ourClients, setOurClients] = useState([])

  useEffect(() => {
    async function getAllourClients() {
      try {
        const ourClients = await axios.get("http://127.0.0.1:8000/api/ourClients/")
        console.log(ourClients.data);
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
    <div key={ourClient.id} className="item" data-value="1">
      <img src={image} alt={ourClient.imgalt} height={100}/>
      <span>{ourClient.span}</span>
    </div>
  ));

  const Carousel = () => (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  );

  return (
    <div className="OurClients container">
      <h1 className='mb-5'>Our Clients Works</h1>
      <Carousel />
    </div>
  );
}

export default OurClients;
