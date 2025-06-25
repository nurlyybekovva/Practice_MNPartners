import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import StoreContext from '../stores/StoreContext';
import '../styles/Form.css';

const Form = () => {
    const { appStore } = useContext(StoreContext);
    const { t, i18n } = useTranslation()
    const [fromCity, setFromCity] = useState('')
    const [toCity, setToCity] = useState('')
    const [dateFrom, setDateFrom] = useState('')
    const [dateTo, setDateTo] = useState('')
    const [isReturnFlight, setIsReturnFlight] = useState(true)

    const handleSwapCities = () => {
        const temp = fromCity
        setFromCity(toCity)
        setToCity(temp)
    }

    const formatDate = (date) => {
        if (!date) return ''
        const d = new Date(date)
        const options = { month: 'short', day: 'numeric', weekday: 'short' }
        return d.toLocaleDateString(i18n.language, options)
    }

    return (
        <form className="search-form">
            <div className="form-container">
                <div className="input-group">
                    <label className="input-label from-label">
                        <input
                            type="text"
                            placeholder={t('form.from')}
                            value={fromCity}
                            onChange={(e) => setFromCity(e.target.value)}
                            className="search-input from"
                        />
                    </label>

                    <button
                        type="button"
                        className="swap-button"
                        onClick={handleSwapCities}
                    >
                        <i className="fas fa-exchange"></i>
                    </button>

                    <label className="input-label to-label">
                        <input
                            type="text"
                            placeholder={t('form.to')}
                            value={toCity}
                            onChange={(e) => setToCity(e.target.value)}
                            className="search-input"
                        />
                    </label>

                    <div className="date-inputs">
                        <div className="date-select">
                            <input
                                type="date"
                                value={dateFrom}
                                onChange={(e) => setDateFrom(e.target.value)}
                                className="date-input"
                            />
                            <span className="date-display">
                                {dateFrom ? formatDate(dateFrom) : t('form.departure')}
                            </span>
                        </div>
                        <div className="date-select">
                            <input
                                type="date"
                                value={dateTo}
                                onChange={(e) => setDateTo(e.target.value)}
                                className="date-input"
                                disabled={!isReturnFlight}
                                min={dateFrom}
                            />
                            <span className="date-display">
                                {dateTo ? formatDate(dateTo) : t('form.return')}
                            </span>
                        </div>
                    </div>

                    <div className="passenger-class">
                        <div className="select-container">
                            <p className="text-gray">{appStore.ticketClass}</p>
                            <p className="passenger-count">{appStore.passengers}</p>
                        </div>
                    </div>

                    <div className='search-button-wrapper'>
                        <button type="submit" className="search-button">
                            {t('form.search')}
                        </button>
                    </div>

                </div>

            </div>

            <div className="additional-options">
                <button type="button" className="option-button">
                    <i className="fas fa-route"></i>
                    <span>{t('form.multiCity')}</span>
                </button>
            </div>
        </form>
    )
}

export default observer(Form);