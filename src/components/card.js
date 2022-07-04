/* import React, {Component} from 'react';
import '../components_css/card.css'

class Card extends Component {
    
  render () {
        return (
            <div className="col">
                <div className='container'>
                    <div id="card" className="card bg-danger">
                        <img src={this.props.card.immagine} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.card.nome} Roll</h5>
                                <p id="porzione">{this.props.card.porzione}</p>
                                <p className="card-text">€ {this.props.card.prezzo}</p>
                                <button id="button-" onClick={() => this.props.diminuisci(this.props.card)} className="btn btn-warning">
                                    - </button>
                                <button id="quantita" className="btn btn-success">{this.props.card.quantita}</button>
                                <button id="buttonPlus" onClick={() => this.props.aumenta(this.props.card)} className="btn btn-warning">
                                    +</button>
                            </div>
                        </div>
                    </div>
                </div>
        );
    };
};

export default Card; */


import '../components_css/card.css'

function Card(props) {

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
                        <input id="quantita" className=" form-control form-control-lg" type="text" value={props.card.quantita} onChange={() => props.aumenta(props.card)} />
                        <button id="buttonPlus" onClick={() => props.aumenta(props.card)} className="btn btn-warning">+</button>
                    </div>
                </div>
            </div>
        </div>


        </>

    );
};

export default Card;

