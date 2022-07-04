/* import React, { Component } from 'react';
import Card from './components/card';
import Navbar from './components/navbar';
import Footer from './components/footer';

import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

class App extends Component {

  state = {
    cards: [
      { id: 0, nome: "California", porzione: "6 pz.", prezzo: 1.99, immagine: california, quantita: 0 },
      { id: 1, nome: "Dragon", porzione: "4 pz.", prezzo: 2.99, immagine: dragon, quantita: 0 },
      { id: 2, nome: "Dynamite", porzione: "8 pz.", prezzo: 3.99, immagine: dynamite, quantita: 0 },
      { id: 3, nome: "Philadelphia", porzione: "6 pz.", prezzo: 4.99, immagine: philadelphia, quantita: 0 },
      { id: 4, nome: "Rainbow", porzione: "8 pz.", prezzo: 5.99, immagine: rainbow, quantita: 0 },
      { id: 5, nome: "Shrimp", porzione: "6 pz.", prezzo: 6.99, immagine: shrimp, quantita: 0 },
    ]
  }

  IncrementaQuantita = card => {
    const newCard = [...this.state.cards]
    const id = newCard.indexOf(card);
    newCard[id] = { ...card }
    newCard[id].quantita++;
    this.setState({ cards: newCard });
    if (newCard[id].quantita > 5) {
      newCard[id].quantita = 5
      alert("Per ogni ordine puoi ordinare massimo 5 porzioni")
    }

  }

  DecrementaQuantita = card => {
    const newCard = [...this.state.cards];
    const id = newCard.indexOf(card);
    newCard[id] = { ...card };
    newCard[id].quantita--;
    this.setState({ cards: newCard });
    if (newCard[id].quantita < 0) {
      newCard[id].quantita = 0
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1 style={{ color: "white", position: "relative", top: "40px", fontStyle: "oblique", textAlign: "right" }}>Cosa desideri ordinare?</h1>
          <div className="row">
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                card={card}
                aumenta={this.IncrementaQuantita}
                diminuisci={this.DecrementaQuantita}
              />
            ))};
          </div>
        </div>
        <Footer />
      </>
    );
  };
};

export default App; */

import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RiepilogoOrdine from './components/riepilogoOrdine';
import FirstPage from './components/FirstPage';

const App = () => {
 
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<FirstPage />}></Route>
          <Route exact path='riepilogoOrdine' element={<RiepilogoOrdine />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
