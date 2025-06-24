import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import '../styles/DropdownCurrency.css'

const DropdownCurrency = () => {
  const { t, i18n } = useTranslation();
  const [isCurrencyOpen, setCurrencyOpen] = useState(false)
  const [isLangOpen, setLangOpen] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState('KZT')
  const [selectedLang, setSelectedLang] = useState(i18n.language.toUpperCase() || 'RU');

  const Currencies = [
    { id: 1, name: 'KZT', desc: t('dropdownCurrency.currency.KZT') },
    { id: 2, name: 'RUB', desc: t('dropdownCurrency.currency.RUB') },
    { id: 3, name: 'USD', desc: t('dropdownCurrency.currency.USD') }
  ]

  const Languages = [
    { id: 1, name: 'RU', desc: t('dropdownCurrency.language.RU') },
    { id: 2, name: 'KZ', desc: t('dropdownCurrency.language.KZ') },
    { id: 3, name: 'EN', desc: t('dropdownCurrency.language.EN') }
  ]

  useEffect(() => {
    setSelectedLang(i18n.language.toUpperCase() || 'RU');
  }, [i18n.language]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
    setSelectedLang(lang);
    setLangOpen(false);
  };

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
                    onClick={() => handleLanguageChange(item.name)}
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