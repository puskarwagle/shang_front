import '../css/App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import overviewImage from '../images/lapC.jpg';
// import overviewImage from '../shang_auth/public/images/overview/${overview.imgsrc}';

function Overviews() {
  const [overviews, setOverviews] = useState([])

  useEffect(() => {
    async function getAllOverviews() {
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
    <section id="overview" className="Overviews container border">
      <h1>Overviews</h1>
      <ul id="overview-list" class="mb-3 pe-5 d-flex list-unstyled border">
        {
          overviews.map((overview) => {
            return (
            <li>{overview.titleLi}</li>
            )
          })
        }
      </ul>
      {
        overviews.map((overview) => {
          return (
            <div class="inOverview d-flex" key={overview.id}>
              <img
                src={overviewImage}
                alt={overview.imgalt}
                className="col-md-6 img-fluid"
                style={{ height: '5rem', width: '5rem' }}
              />
              <div class="col-md-6 inOverviewText d-flex flex-column pt-4 px-5">
                <span>imgalt: {overview.imgalt}</span><br />
                <a>link: {overview.link}</a>
              </div>
              {/* <span class="mb-4">text2: { overview.text2 }</span><br/>
                <span>text3: { overview.text3 }</span><br/>
                <span>text1: { overview.text1 }</span><br/> */}
            </div>
          )
        })
      }
    </section>
  );
}

export default Overviews;