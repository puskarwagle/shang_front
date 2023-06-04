import '../css/App.css';
import { useState, useEffect } from "react";
import axios from 'axios';

function Cards() {
  const [cards, setcards] = useState([])

  useEffect( () => {
    async function getAllCards()  {
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
    <div className="OurCard container">
      <h1>Our Cards</h1>
      {
        cards.map((card) =>{
          return (
            <div key={card.id}>
              <i className={ card.icon }></i>
              <h6>{ card.title }</h6>
              <p>{ card.description }</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default Cards;