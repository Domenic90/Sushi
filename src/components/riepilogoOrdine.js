import React from 'react'
import '../components_css/riepilogoOrdine.css'
import Navbar from './Navbar'

const riepilogoOrdine = () => {

  return (
    <>
      <Navbar
        logout="Logout"
      />
      <div className='main-content h1 text-light m-5'>Riepilogo Ordine</div>
    </>
  )
}

export default riepilogoOrdine
