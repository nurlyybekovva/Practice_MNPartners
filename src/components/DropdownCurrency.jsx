import React, { useState } from 'react'
import '../styles/DropdownCurrency.css'

const DropdownCurrency = () => {
  const [isCurrencyOpen, setCurrencyOpen] = useState(false)
  const [isLangOpen, setLangOpen] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState('KZT')
  const [selectedLang, setSelectedLang] = useState('RU')

  const Currencies = [
    { id: 1, name: 'KZT', desc: 'Kazakhstan Tenge' },
    { id: 2, name: 'RUB', desc: 'Russian Rouble' },
    { id: 3, name: 'USD', desc: 'US Dollar' }
  ]

  const Languages = [
    { id: 1, name: 'RU', desc: 'Русский' },
    { id: 2, name: 'KZ', desc: 'Қазақ' },
    { id: 3, name: 'EN', desc: 'English' }
  ]

  return (
    <div className='dropdowns-container'>
      <div className='dropdown-wrapper'>
        <div className='dropdown-currency'>
          <div
            className='dropdown-button'
            onClick={() => {
              setCurrencyOpen(!isCurrencyOpen)
              setLangOpen(false)
            }}
          >
            <span className='selected'>{selectedCurrency}</span>
            <span className='arrow'>{isCurrencyOpen ? '▲' : '▼'}</span>
          </div>

          {isCurrencyOpen && (
            <div className='dropdown-content'>
              <div className='dropdown-items'>
                {Currencies.map((item) => (
                  <div
                    key={item.id}
                    className='dropdown-item'
                    onClick={() => {
                      setSelectedCurrency(item.name)
                      setCurrencyOpen(false)
                    }}
                  >
                    <div className='item-code'>{item.name}</div>
                    <div className='item-desc'>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='dropdown-wrapper'>
        <div className='dropdown-language'>
          <div
            className='dropdown-button'
            onClick={() => {
              setLangOpen(!isLangOpen)
              setCurrencyOpen(false)
            }}
          >
            <span className='selected'>{selectedLang}</span>
            <span className='arrow'>{isLangOpen ? '▲' : '▼'}</span>
          </div>

          {isLangOpen && (
            <div className='dropdown-content'>
              <div className='dropdown-items'>
                {Languages.map((item) => (
                  <div
                    key={item.id}
                    className='dropdown-item'
                    onClick={() => {
                      setSelectedLang(item.name)
                      setLangOpen(false)
                    }}
                  >
                    <div className='item-code'>{item.name}</div>
                    <div className='item-desc'>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DropdownCurrency