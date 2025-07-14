import React from 'react'
import '../styles/index.css'
import Navbar from '../components/Navbar/Navbar'
import MainHero from '../components/Form/MainHero'
import Footer from '../components/Footer/Footer'
import Price from '../components/PriceCard/PriceSection'

const Home = () => {
    return (
        <div className='container'>
            <Navbar />
            <MainHero />
            <Price />
            <Footer />
        </div>
    )
}

export default Home
