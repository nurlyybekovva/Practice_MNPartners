import React from 'react'
import '../styles/PriceSection.css'
import { useTranslation } from 'react-i18next';

const PriceSection = () => {
    const { t } = useTranslation();
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
                                <p>00h 00m {t('priceSection.onTheWay')}</p>
                                <p>{t('priceSection.layover')} 0&nbsp;{t('priceSection.hours')}</p>
                            </div>

                        </article>
                        <button className="choose-btn">
                            <span>{t('priceSection.choose')}</span>
                        </button>
                        <strong className="price-card-badge price-card-badge-light">
                            <span>{t('priceSection.cheapest')}</span>
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
                                <p>00h 00m {t('priceSection.onTheWay')}</p>
                                <p>{t('priceSection.layover')} 0&nbsp;{t('priceSection.hours')}</p>
                            </div>

                        </article>
                        <button className="choose-btn">
                            <span>{t('priceSection.choose')}</span>
                        </button>
                        <strong className="price-card-badge price-card-badge-dark">
                            <span>{t('priceSection.fastest')}</span>
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
                                <p>00h 00m {t('priceSection.onTheWay')}</p>
                                <p>{t('priceSection.layover')} 0&nbsp;{t('priceSection.hours')}</p>
                            </div>

                        </article>
                        <button className="choose-btn">
                            <span>{t('priceSection.choose')}</span>
                        </button>
                    </a>
                </div>

            </div>

        </div>
    )
}

export default PriceSection