import React from 'react'
import '../components_css/confirmButton.css'

const confirmButton = (props) => {
    return (
        <div  className="d-grid gap-2 col-2 mx-auto">
            <button id="confirmButton" className="btn btn-success" type="button" onClick={() => props.conferma()}>Conferma Ordine</button>
        </div>
    )
}

export default confirmButton
