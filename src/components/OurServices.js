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
      <h1 className="pb-2">Our Services</h1>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      {
        services.map((service) => {
          return (

            <div className="col d-flex align-items-start" key={service.id}>
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                < FaLaptop />
              </div>
              <div>
                <h6 className="">{ service.title }</h6>
                <p>{ service.description }</p>
              </div>
            </div>
          )
        })
      }
    </div>
    </div>
  );
}

export default OurService;