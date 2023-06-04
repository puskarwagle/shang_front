import '../css/App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import { FaLaptop } from 'react-icons/fa';

function OurService() {
  const [services, setServices] = useState([])

  useEffect( () => {
    async function getAllServices()  {
      try {
        const services = await axios.get("http://127.0.0.1:8000/api/service/")
        setServices(services.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllServices()
  }, [])

  return (
    <div className="OurService container">
      <h1>Our Services</h1>
      {
        services.map((service) => {
          return (
            <div key={service.id}>
              < FaLaptop />
              <h6>{ service.title }</h6>
              <p>{ service.description }</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default OurService;