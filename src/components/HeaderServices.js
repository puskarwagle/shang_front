import '../css/App.css';
import { useState, useEffect } from "react";
import axios from 'axios';

function HeaderServices() {
  const [headerServices, setHeaderServices] = useState([])

  useEffect(() => {
    async function getAllHeaderServices() {
      try {
        const headerServices = await axios.get("http://127.0.0.1:8000/api/headerServices/")
        //console.log(headerServices.data)
        setHeaderServices(headerServices.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllHeaderServices()
  }, [])

  return (
    <div className="HeaderServices container">
      <h1>Header Services</h1>
      {
        headerServices.map((headerService) => {
          return (
            <div key={headerService.id}>
              <i className={headerService.icon}></i>
              <h4>{headerService.title}</h4>
              <span>{headerService.title_text}</span>
              {headerService.subTT.map((subT) => (
                <div key={subT.title}>
                  <h6>{subT.title}</h6>
                  <p>{subT.text}</p>
                </div>
              ))}
            </div>
          )
        })
      }
    </div>
  );
}

export default HeaderServices;