import React, { useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import StoreContext from '../stores/StoreContext'
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material'

const DropdownCurrency = () => {
  const { appStore } = useContext(StoreContext)
  const { t } = useTranslation()

  // Currency and language lists with i18n
  const currencies = [
    { id: 1, name: 'KZT', desc: t('dropdownCurrency.currency.KZT') },
    { id: 2, name: 'RUB', desc: t('dropdownCurrency.currency.RUB') },
    { id: 3, name: 'USD', desc: t('dropdownCurrency.currency.USD') }
  ]

  const languages = [
    { id: 1, name: 'RU', desc: t('dropdownCurrency.language.RU') },
    { id: 2, name: 'KZ', desc: t('dropdownCurrency.language.KZ') },
    { id: 3, name: 'EN', desc: t('dropdownCurrency.language.EN') }
  ]

  // Menu state
  const [currencyAnchor, setCurrencyAnchor] = useState(null)
  const [langAnchor, setLangAnchor] = useState(null)

  // Handlers for currency
  const handleCurrencyClick = (event) => {
    setCurrencyAnchor(event.currentTarget)
  }
  const handleCurrencyClose = () => {
    setCurrencyAnchor(null)
  }
  const handleCurrencySelect = (currency) => {
    appStore.setCurrency(currency.name)
    setCurrencyAnchor(null)
  }

  // Handlers for language
  const handleLangClick = (event) => {
    setLangAnchor(event.currentTarget)
  }
  const handleLangClose = () => {
    setLangAnchor(null)
  }
  const handleLangSelect = (lang) => {
    appStore.setLanguage(lang.name)
    setLangAnchor(null)
  }

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {/* Currency Menu */}
      <Box>
        <Button
          variant="none"
          color="inherit"
          onClick={handleCurrencyClick}
          sx={{
            padding: "8px 12px",
            color: '#fff',
            fontWeight: 600,
            borderColor: '#fff',
            textTransform: 'none',
            minWidth: 64
          }}
          endIcon={
            <span style={{ fontSize: 12 }}>
              {currencyAnchor ? '▲' : '▼'}
            </span>
          }
        >
          {appStore.selectedCurrency}
        </Button>
        <Menu
          anchorEl={currencyAnchor}
          open={Boolean(currencyAnchor)}
          onClose={handleCurrencyClose}
        >
          {currencies.map((item) => (
            <MenuItem
              key={item.id}
              selected={appStore.selectedCurrency === item.name}
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
        <Button
          variant="none"
          color="inherit"
          onClick={handleLangClick}
          sx={{
            padding: "8px 12px",
            color: '#fff',
            fontWeight: 600,
            borderColor: '#fff',
            textTransform: 'none',
            minWidth: 64
          }}
          endIcon={
            <span style={{ fontSize: 12 }}>
              {langAnchor ? '▲' : '▼'}
            </span>
          }
        >
          {appStore.selectedLanguage}
        </Button>
        <Menu
          anchorEl={langAnchor}
          open={Boolean(langAnchor)}
          onClose={handleLangClose}
        >
          {languages.map((item) => (
            <MenuItem
              key={item.id}
              selected={appStore.selectedLanguage === item.name}
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

export default observer(DropdownCurrency)