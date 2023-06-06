import '../css/App.css';
import '../css/Recent.css';
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
    <section className="RecentWorks container">
      <h1>Our Recent Works</h1>
      <div class="honey">
      {
        recentWorks.map((recentWork) =>{
          return (
            <div class="rw" key={recentWork.id}>
              <div class="imgL">
                <img src={ myImage } alt={ recentWork.imgalt } />
                <span>{ recentWork.titleA }</span>
                <span>{ recentWork.titleB }</span>
              </div>
              <div class="tect">{ recentWork.description }</div>
            </div>
          )
        })
      }
      </div>
    </section>
  );
}

export default RecentWorks;