import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Session from './Components/About'
import Cards from './Components/Services'
import Map from './Components/Map'
import Footer from './Components/Footer'
import Card1 from './Pages/Card1';
import Card2 from "./Pages/Card2"
import Card3 from "./Pages/Card3"
import Card4 from "./Pages/Card4"
import MeetingForm from './Components/MeetingForm ';

function App() {
  return (
    <>
      <div className="overflow-x-hidden">

        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Session />
                <Cards />
                <Map />
              </>
            }
          />

          <Route path="/" element={<Cards />} />
          <Route path="/card/1" element={<Card1 />} />
          <Route path="/card/2" element={<Card2 />} />
          <Route path="/card/3" element={<Card3 />} />
          <Route path="/card/4" element={<Card4 />} />
          <Route path="/MeetingForm" element={<MeetingForm />} />

        </Routes >
        <Footer />
      </div>
    </>
  )
}

export default App
