import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import ConsultationBooking from './components/Form/index'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/book-now" element={<ConsultationBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
