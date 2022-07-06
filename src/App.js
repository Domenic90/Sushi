import React from 'react';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import RiepilogoOrdine from './pages/RiepilogoOrdine';
import Login from './pages/Login';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <>
      <BrowserRouter>
      <Navbar />
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
