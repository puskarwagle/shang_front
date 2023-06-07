import '../css/App.css';
import '../css/Recent.css';
import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import myImage from '../images/recentWorks/1685873613.png';

function RecentWorks() {
  const [recentWorks, setRecentWorks] = useState([])

  useEffect( () => {
    async function getAllrecentWorks()  {
      try {
        const recentWorks = await axios.get("http://127.0.0.1:8000/api/recentWorks/")
        setRecentWorks(recentWorks.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllrecentWorks()
  }, [])

  return (
    <section id="recentWorks" className="RecentWorks">
      <h1>Our Recent Works</h1>
      <div className="honey row">
      {
        recentWorks.map((recentWork) =>{
          return (
            <div className="rw col-sm-12" key={recentWork.id}>
              <div className="imgL">
                <img src={ myImage } alt={ recentWork.imgalt } />
                <span>{ recentWork.titleA }</span>
                <span>{ recentWork.titleB }</span>
              </div>
              <div className="tect">{ recentWork.description }</div>
            </div>
          )
        })
      }
      </div>
    </section>
  );
}

export default RecentWorks;