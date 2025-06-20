import React from 'react'
import './styles/index.css'
import Navbar from './components/Navbar'
import MainHero from './components/MainHero' 
import Footer from './components/Footer'
import Price from './components/PriceSection'

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <MainHero />
      <Price />
      <Footer />
    </div>
  )
}

export default App
