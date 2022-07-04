import '../components_css/card.css'
import { useState } from 'react';

function Card(props) {


    const [quantita, setQuantita] = useState(0)

    const AumentaQuantita = () => {
        setQuantita(quantita + 1);
        if (quantita >= 5) {
            setQuantita(5)
            alert("Per ogni ordine puoi ordinare massimo 5 porzioni")
        }

    }

    const DecrementaQuantita = () => {
        setQuantita(quantita - 1);
        if (quantita <= 0) {
            setQuantita(0)
        }
    }

    return (
        < >
            <div className="col" >
                <div className="container">
                    <div id="card" className="card bg-danger">
                        <img src={props.card.immagine} className="card-img-top" alt="..." style={{ borderRadius: "90px" }} />
                        <div className="card-body">
                            <h5 className="card-title">{props.card.nome} Roll</h5>
                            <p id="porzione">{props.card.porzione}</p>
                            <p className="card-text">€ {props.card.prezzo}</p>
                            <button id="button-" onClick={() => DecrementaQuantita()} className="btn btn-warning">-</button>
                            <input id="quantita" className=" form-control form-control-lg" type="text" value={quantita} onChange={() => AumentaQuantita()} />
                            <button id="buttonPlus" onClick={() => AumentaQuantita()} className="btn btn-warning">+</button>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
};

export default Card;

