import React, {useState} from "react"
import Card from "./card";
import ConfirmButton from "./confirmButton"
import { ITEMS } from "../data/items"
import { useNavigate } from "react-router-dom";

function FirstPage(){
  const [cards, setCards] = useState(ITEMS);
  let navigate = useNavigate()

  const IncrementaQuantita = card => {
    const newCard = [...cards]
    const updatecard = newCard.indexOf(card);
    newCard[updatecard] = { ...card }
    newCard[updatecard].quantita++;
    setCards(newCard);
    if (newCard[updatecard].quantita > 5) {
      newCard[updatecard].quantita = 5
      alert("Per ogni ordine puoi ordinare massimo 5 porzioni")
    }
  }

  const DecrementaQuantita = card => {
    const newCard = [...cards];
    const updatecard = newCard.indexOf(card);
    newCard[updatecard] = { ...card };
    newCard[updatecard].quantita--;
    setCards(newCard);
    if (newCard[updatecard].quantita < 0) {
      newCard[updatecard].quantita = 0
    }
  }

  const vaiAlRiepilogo = () => navigate("/riepilogoOrdine")

  return (
    <>
      <div className="container">
        <h1 style={{ color: "white", position: "relative", top: "40px", fontStyle: "oblique", textAlign: "right" }}>Cosa desideri ordinare?</h1>
        <div className="row">
          {cards.map(card => (
            <Card
              key={card.id}
              card={card}
              aumenta={IncrementaQuantita}
              diminuisci={DecrementaQuantita} />
          ))}
        </div>
        <ConfirmButton onClick={vaiAlRiepilogo}>Vai al Riepilogo</ConfirmButton>
      </div>
    </>
  )
}

export default FirstPage