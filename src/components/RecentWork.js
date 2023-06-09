import '../css/App.css';
import '../css/Recent.css';
import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

function RecentWorks() {
  const [recentWorks, setRecentWorks] = useState([])

  useEffect(() => {
    async function getAllrecentWorks() {
      try {
        const recentWorks = await axios.get("http://127.0.0.1:8000/api/recentWorks/")
        setRecentWorks(recentWorks.data)
        //console.log(recentWorks.data[0].imgsrc);
      } catch (error) {
        console.log(error)
      }
    }
    getAllrecentWorks()
  }, [])

  return (
    <section id="recentWorks" className="RecentWorks">
      <h1>Our Recent Works</h1>
      <div className="honey row d-flex flex-wrap gap-3 container px-5">
        {
          recentWorks.map((recentWork) => {
            return (
              <div className="rw col-md-6" key={recentWork.id}>
                <div className="imgL">
                  <img src={`http://127.0.0.1:8000/images/recentWorks/${recentWork.imgsrc}`} alt={recentWork.imgalt} />
                  <span>{recentWork.imgsrc}</span>
                  <span>{recentWork.titleA}</span>
                  <span>{recentWork.titleB}</span>
                </div>
                <div className="tect">{recentWork.description}</div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
}

export default RecentWorks;