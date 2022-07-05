import React from "react"
import Card from "./card";
import ConfirmButton from "./confirmButton"
import { ITEMS } from "../data/items"
import { useNavigate } from "react-router-dom";

function FirstPage(){
  let navigate = useNavigate()

  const vaiAlRiepilogo = () => navigate("/riepilogoOrdine")

  return (
    <>
      <div className="container">
        <h1 style={{ color: "white", position: "relative", top: "40px", fontStyle: "oblique", textAlign: "right", marginTop: "60px" }}>Cosa desideri ordinare?</h1>
        <div className="row">
          {ITEMS.map(card => (
            <Card key={card.id} card={card} />
          ))}
        </div>
        <ConfirmButton onClick={vaiAlRiepilogo}>Vai al Riepilogo</ConfirmButton>
      </div>
    </>
  )
}

export default FirstPage