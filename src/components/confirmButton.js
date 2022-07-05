import React from 'react'
import '../components_css/confirmButton.css'

const ConfirmButton = (props) => {
    return (
        <div  className="d-grid gap-2 col-2 mx-auto">
            <button id="confirmButton" className="btn btn-success" type="button" onClick={props.onClickRiepilogo}>{props.children}</button>
        </div>
    )
}

export default ConfirmButton
