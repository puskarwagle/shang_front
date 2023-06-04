import '../css/App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import myImage from '../images/client1.png';

function Overviews() {
  const [overviews, setOverviews] = useState([])

  useEffect( () => {
    async function getAllOverviews()  {
      try {
        const overviews = await axios.get("http://127.0.0.1:8000/api/overviews/")
        setOverviews(overviews.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllOverviews()
  }, [])

  return (
    <div className="Overviews container">
      <h1>Overviews</h1>
      {
        overviews.map((overviews) =>{
          return (
            <div key={overviews.id}>
              <img src={ myImage } alt={ overviews.imgalt } width="100"/>
              <h3 class="mb-4">titleLi: { overviews.titleLi }</h3><br/>
              <span>imgalt: { overviews.imgalt }</span><br/>
              <span>text1: { overviews.text1 }</span><br/>
              <span class="mb-4">text2: { overviews.text2 }</span><br/>
              <span>text3: { overviews.text3 }</span><br/>
              <span>link: { overviews.link }</span>
            </div>
          )
        })
      }
    </div>
  );
}

export default Overviews;