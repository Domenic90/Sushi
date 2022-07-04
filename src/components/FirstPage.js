import React, {useState} from "react"
import Card from "./card";
import ConfirmButton from "./confirmButton"
//import { ITEMS } from "./data/items"

import california from '../images/california.png';
import dragon from '../images/dragon.png';
import dynamite from '../images/dynamite.png';
import philadelphia from '../images/philadelphia.png';
import rainbow from '../images/rainbow.png';
import shrimp from '../images/shrimp.png';

function FirstPage(){
  const [cards, setCards] = useState([
    { id: 0, nome: "California", porzione: "6 pz.", prezzo: 1.99, immagine: california, quantita: 0 },
    { id: 1, nome: "Dragon", porzione: "4 pz.", prezzo: 2.99, immagine: dragon, quantita: 0 },
    { id: 2, nome: "Dynamite", porzione: "8 pz.", prezzo: 3.99, immagine: dynamite, quantita: 0 },
    { id: 3, nome: "Philadelphia", porzione: "6 pz.", prezzo: 4.99, immagine: philadelphia, quantita: 0 },
    { id: 4, nome: "Rainbow", porzione: "8 pz.", prezzo: 5.99, immagine: rainbow, quantita: 0 },
    { id: 5, nome: "Shrimp", porzione: "6 pz.", prezzo: 6.99, immagine: shrimp, quantita: 0 },
  ]);

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
        <ConfirmButton />
      </div>
    </>
  )
}

export default FirstPage