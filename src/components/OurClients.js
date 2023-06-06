import '../css/App.css';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useState, useEffect } from "react";
import axios from 'axios';

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
    <div key={ourClient.id} className="item px-5 d-flex flex-column" data-value="1">
      <img className="border mb-3" src={require(`../../../shang_auth/public/images/ourClients/${ourClient.imgsrc}`).default} alt={ourClient.imgalt}/>
      <span className='text-muted text-large'>{ourClient.span}</span>
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
    <div id="ourClients" className="OurClients container">
      <h1 className='mb-5'>Our Clients</h1>
      <Carousel />
    </div>
  );
}

export default OurClients;
