import '../css/App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import { BsArrowRight } from 'react-icons/bs';


function Cards() {
  const [cards, setcards] = useState([])

  useEffect(() => {
    async function getAllCards() {
      try {
        const cards = await axios.get("http://127.0.0.1:8000/api/cards/")
        //console.log(cards.data)
        setcards(cards.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllCards()
  }, [])

  return (
    <section className="OurCard container">
      <div className="row row-cols-1 row-cols-lg-2">
      {
        cards.map((card) => {
          return (
            <a key={card.id} href="" className="col-md-6 rounded-0 p-3 card text-decoration-none csCard" >
              <span className="mb-4 text-muted rtyu">{ card.title}</span>
              <p className="mb-5">
                <span className="w-75">{ card.description}</span>
              </p>
              <i className="text-primary">< BsArrowRight /></i>
            </a>
          )
        })
      }
      </div>
    </section>
  );
}

export default Cards;