import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import RiepilogoOrdine from './components/riepilogoOrdine';

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
