import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';

const App = () => {
  console.log('App component rendered');
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacts" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  )
}

export default App