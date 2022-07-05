import React from 'react';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import RiepilogoOrdine from './components/RiepilogoOrdine';
import Login from './components/Login';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<FirstPage />}></Route>
          <Route exact path='riepilogoOrdine' element={<RiepilogoOrdine />}></Route>
          <Route exact path='login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
