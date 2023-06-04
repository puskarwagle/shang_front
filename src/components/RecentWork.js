import '../css/App.css';
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
    <div className="RecentWorks container">
      <h1>Our Recent Works</h1>
      {
        recentWorks.map((recentWork) =>{
          return (
            <div key={recentWork.id}>
              <img src={ myImage } alt={ recentWork.imgalt } />
              <span>{ recentWork.titleA }</span>
              <span>{ recentWork.titleB }</span>
              <div>{ recentWork.description }</div>
            </div>
          )
        })
      }
    </div>
  );
}

export default RecentWorks;