import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../css/App.css';
import '../css/ExploreTech.css';

function ExploreTechs() {
  const [exploreTechs, setExploreTechs] = useState([]);

  useEffect(() => {
    async function getAllExploreTechs() {
      try {
        const exploreTechs = await axios.get("http://127.0.0.1:8000/api/exploreTechs/");
        setExploreTechs(exploreTechs.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllExploreTechs();
  }, []);

  return (
    <section className="ExploreTech container">
      <h1>Our ExploreTechs</h1>
      <div id="techCards">
      {exploreTechs.map((exploreTech) => {
        return (
          <div className="tCards" tabindex="0" key={exploreTech.id}>
            <div className="tHead">
              <div className="tIcons">
                <i className=""></i>
              </div>
              <div className="tTexts">
                <span>{exploreTech.title}</span>
                <i className="fas fa-angle-down"></i>
                <i className="fas fa-angle-up"></i>
              </div>
            </div>
            <div className="tContent">
              <div className="tcHead">
                <h3>{exploreTech.title}</h3>
              </div>
              {exploreTech.links.map((link) => (
                <div key={link.title} className="tcLinks">
                  <a href="#">{link.title}</a>
                  <span>{link.text}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      </div>
    </section>
  );
}

export default ExploreTechs;
