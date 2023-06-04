import '../css/App.css';
import { useState, useEffect } from "react";
import axios from 'axios';

function ExploreTechs() {
  const [exploreTechs, setExploreTechs] = useState([])

  useEffect(() => {
    async function getAllExploreTechs() {
      try {
        const exploreTechs = await axios.get("http://127.0.0.1:8000/api/exploreTechs/")
        //console.log(exploreTechs.data)
        setExploreTechs(exploreTechs.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllExploreTechs()
  }, [])

  return (
    <div className="ExploreTechs container">
      <h1>Our ExploreTechs</h1>
      {
        exploreTechs.map((exploreTech) => {
          return (
            <div key={exploreTech.id}>
              <i className={exploreTech.icon}></i>
              <h4>{exploreTech.title}</h4>
              {exploreTech.links.map((link) => (
                <div key={link.title}>
                  <h6>{link.title}</h6>
                  <p>{link.text}</p>
                </div>
              ))}
            </div>
          )
        })
      }
    </div>
  );
}

export default ExploreTechs;