import React, { useState } from 'react'
import '../styles/Form.css'

const Form = () => {
    const [fromCity, setFromCity] = useState('')
    const [toCity, setToCity] = useState('')
    const [dateFrom, setDateFrom] = useState('')
    const [dateTo, setDateTo] = useState('')
    const [isReturnFlight, setIsReturnFlight] = useState(true)
    const [passengers, setPassengers] = useState('1 adult')
    const [ticketClass, setTicketClass] = useState('Economy')

    const handleSwapCities = () => {
        const temp = fromCity
        setFromCity(toCity)
        setToCity(temp)
    }

    const formatDate = (date) => {
        if (!date) return ''
        const d = new Date(date)
        const options = { month: 'short', day: 'numeric', weekday: 'short' }
        return d.toLocaleDateString('ru-RU', options)
    }

    return (
        <form className="search-form">
            <div className="form-container">
                <div className="input-group">
                    <label className="input-label from-label">
                        <input
                            type="text"
                            placeholder="From"
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
                            placeholder="To"
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
                                {dateFrom ? formatDate(dateFrom) : 'Departure'}
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
                                {dateTo ? formatDate(dateTo) : 'Return'}
                            </span>
                        </div>
                    </div>

                    <div className="passenger-class">
                        <div className="select-container">
                            <p className="text-gray">Economy</p>
                            <p className="passenger-count">1 adult</p>
                        </div>
                    </div>

                    <div className='search-button-wrapper'>
                        <button type="submit" className="search-button">
                            Search flights
                        </button>
                    </div>

                </div>

            </div>

            <div className="additional-options">
                <button type="button" className="option-button">
                    <i className="fas fa-route"></i>
                    <span>Create multi-city route</span>
                </button>
            </div>
        </form>
    )
}

export default Form