import React, { useState } from 'react'
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material'

const currencies = [
  { id: 1, name: 'KZT', desc: 'Kazakhstan Tenge' },
  { id: 2, name: 'RUB', desc: 'Russian Rouble' },
  { id: 3, name: 'USD', desc: 'US Dollar' }
]

const languages = [
  { id: 1, name: 'RU', desc: 'Русский' },
  { id: 2, name: 'KZ', desc: 'Қазақ' },
  { id: 3, name: 'EN', desc: 'English' }
]

const DropdownCurrency = () => {
  const [currencyAnchor, setCurrencyAnchor] = useState(null)
  const [langAnchor, setLangAnchor] = useState(null)
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0])
  const [selectedLang, setSelectedLang] = useState(languages[0])

  const handleCurrencyClick = (event) => {
    setCurrencyAnchor(event.currentTarget)
  }

  const handleCurrencyClose = () => {
    setCurrencyAnchor(null)
  }

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency)
    setCurrencyAnchor(null)
  }

  const handleLangClick = (event) => {
    setLangAnchor(event.currentTarget)
  }

  const handleLangClose = () => {
    setLangAnchor(null)
  }

  const handleLangSelect = (lang) => {
    setSelectedLang(lang)
    setLangAnchor(null)
  }

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {/* Currency Menu */}
      <Box>
        <Button variant="none" color="inherit" onClick={handleCurrencyClick}
          sx={{ padding: "8px 12px", color: '#fff', fontWeight: 600, textTransform: 'none' }}
          endIcon={<span style={{ fontSize: 12, transition: 'transform 0.3s ease' }}>{currencyAnchor ? '▲' : '▼'}</span>}>
          {selectedCurrency.name}
        </Button>
        <Menu
          anchorEl={currencyAnchor}
          open={Boolean(currencyAnchor)}
          onClose={handleCurrencyClose}
        >
          {currencies.map((item) => (
            <MenuItem
              key={item.id}
              selected={selectedCurrency.name === item.name}
              onClick={() => handleCurrencySelect(item)}
            >
              <Box>
                <Typography sx={{ fontWeight: 600 }}>{item.name}</Typography>
                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{item.desc}</Typography>
              </Box>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* Language Menu */}
      <Box>
        <Button variant="none" color="inherit" onClick={handleLangClick}
          sx={{ padding: "8px 12px", color: '#fff', fontWeight: 600, textTransform: 'none' }}
          endIcon={<span style={{ fontSize: 12, transition: 'transform 0.3s ease' }}>{langAnchor ? '▲' : '▼'}</span>}>
          {selectedLang.name}
        </Button>
        <Menu
          anchorEl={langAnchor}
          open={Boolean(langAnchor)}
          onClose={handleLangClose}
        >
          {languages.map((item) => (
            <MenuItem
              key={item.id}
              selected={selectedLang.name === item.name}
              onClick={() => handleLangSelect(item)}
            >
              <Box>
                <Typography sx={{ fontWeight: 600 }}>{item.name}</Typography>
                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{item.desc}</Typography>
              </Box>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  )
}

export default DropdownCurrency