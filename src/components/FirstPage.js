import React, { useState } from "react"
import Card from "./Card";
import ConfirmButton from "./ConfirmButton"
import { ITEMS } from "../data/items"
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function FirstPage(props) {

  const [cards, setCards] = useState(ITEMS);
  let navigate = useNavigate()

  const vaiAlRiepilogo = () => navigate("/riepilogoOrdine")
  const vaiAlLogin = () => navigate("/login")
  const vaiAllaRegistrazione = () => navigate("/registrazione")

  return (
    <>
      <Navbar
     login = "Login"
     registrati = "Registrati"
     onClickLogin={vaiAlLogin}
     onClickRegistrazione={vaiAllaRegistrazione}
      />
      
      <div className="container">
        <h1 style={{ color: "white", position: "relative", top: "40px", fontStyle: "oblique", textAlign: "right" }}>Cosa desideri ordinare?</h1>
        <div className="row">
          {cards.map(card => (
            <Card
              key={card.id}
              card={card}
            />
          ))}
        </div>
        <ConfirmButton onClickRiepilogo={vaiAlRiepilogo}>Vai al Riepilogo</ConfirmButton>
      </div>
    </>
  )
}

export default FirstPage