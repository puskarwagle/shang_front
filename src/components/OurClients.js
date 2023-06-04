import '../css/App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import myImage from '../images/client1.png';

function OurClients() {
  const [ourClients, setOurClients] = useState([])

  useEffect( () => {
    async function getAllourClients()  {
      try {
        const ourClients = await axios.get("http://127.0.0.1:8000/api/ourClients/")
        setOurClients(ourClients.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllourClients()
  }, [])

  return (
    <div className="OurClients container">
      <h1>Our Clients Works</h1>
      {
        ourClients.map((ourClient) =>{
          return (
            <div key={ourClient.id}>
              <img src={ myImage } alt={ ourClient.imgalt } width="100"/>
              <span>{ ourClient.span }</span>
            </div>
          )
        })
      }
    </div>
  );
}

export default OurClients;