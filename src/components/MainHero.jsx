import React from 'react'
import '../styles/MainHero.css'
import Form from './Form.jsx'
import { useTranslation } from 'react-i18next';

const MainHero = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className='hero-section'>
                <div className='hero-content'>
                    <span>
                        <h1>{t('mainHero.title')}</h1>
                        <button className='explore-button'>
                            {t('mainHero.explore')}
                        </button>
                    </span>
                </div>
                
                <Form />
            </div>
            
        </div>
    )
}

export default MainHero
