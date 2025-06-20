import React from 'react'
import '../styles/PriceSection.css'

const PriceSection = () => {
    return (
        <div className="price-section">
            <div className='price-container'>
                <div className="price-card">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="#"
                        className="price-card-link"
                    >
                        <article className="price-card-article">
                            <div className="price-card-header">
                                <div className="price-card-date">
                                    1&nbsp;Jan<span className="price-card-weekday">, Mon</span>
                                </div>
                                <h3 className="price-card-price">000 000 ₸</h3>
                            </div>
                            <div className='price-card-info'>
                                <p>00h 00m on the way</p>
                                <p>Layover 0&nbsp;hours</p>
                            </div>

                        </article>
                        <button className="choose-btn">
                            <span>Choose</span>
                        </button>
                        <strong className="price-card-badge price-card-badge-light">
                            <span>Cheapest</span>
                        </strong>
                    </a>
                </div>

                

                <div className="price-card">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="#"
                        className="price-card-link"
                    >
                        <article className="price-card-article">
                            <div className="price-card-header">
                                <div className="price-card-date">
                                    1&nbsp;Jan<span className="price-card-weekday">, Mon</span>
                                </div>
                                <h3 className="price-card-price">000 000 ₸</h3>
                            </div>
                            <div className='price-card-info'>
                                <p>00h 00m on the way</p>
                                <p>Layover 0&nbsp;hours</p>
                            </div>

                        </article>
                        <button className="choose-btn">
                            <span>Choose</span>
                        </button>
                        <strong className="price-card-badge price-card-badge-dark">
                            <span>Fastest</span>
                        </strong>
                    </a>
                </div>

                <div className="price-card">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="#"
                        className="price-card-link"
                    >
                        <article className="price-card-article">
                            <div className="price-card-header">
                                <div className="price-card-date">
                                    1&nbsp;Jan<span className="price-card-weekday">, Mon</span>
                                </div>
                                <h3 className="price-card-price">000 000 ₸</h3>
                            </div>
                            <div className='price-card-info'>
                                <p>00h 00m on the way</p>
                                <p>Layover 0&nbsp;hours</p>
                            </div>

                        </article>
                        <button className="choose-btn">
                            <span>Choose</span>
                        </button>
                    </a>
                </div>

                
            </div>

        </div>
    )
}

export default PriceSection