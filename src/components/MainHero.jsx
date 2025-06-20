import React from 'react'
import '../styles/MainHero.css'
import Form from './Form.jsx'

const MainHero = () => {
    return (
        <div>
            <div className='hero-section'>
                <div className='hero-content'>
                    <span>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                        <button className='explore-button'>
                            Explore Now
                        </button>
                    </span>
                </div>
                
                <Form />
            </div>
            
        </div>
    )
}

export default MainHero
