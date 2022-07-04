import '../components_css/card.css'
import { useState } from 'react';

function Card(props) {


    const [quantita, setQuantita] = useState(0)

    const prova = () => {
        setQuantita(quantita + 1)
    }

    return (
        < >
        <div className="col" >
            <div className="container">
                <div id="card" className="card bg-danger">
                    <img src={props.card.immagine} className="card-img-top" alt="..." style={{borderRadius: "90px"}} />
                    <div className="card-body">
                        <h5 className="card-title">{props.card.nome} Roll</h5>
                        <p id="porzione">{props.card.porzione}</p>
                        <p className="card-text">€ {props.card.prezzo}</p>
                        <button id="button-" onClick={() => props.diminuisci(props.card)} className="btn btn-warning">-</button>
                        <input id="quantita" className=" form-control form-control-lg" type="text" value={quantita} onChange={() => props.aumenta(props.card)} />
                        <button id="buttonPlus" onClick={() => prova()} className="btn btn-warning">+</button>
                    </div>
                </div>
            </div>
        </div>


        </>

    );
};

export default Card;

