import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import DropdownCurrency from './DropdownCurrency'
import { useTranslation } from 'react-i18next'

const navLinks = [
  { labelKey: 'navbar.home', href: '/' },
  { labelKey: 'navbar.about', href: '/about' },
  { labelKey: 'navbar.services', href: '/services' },
  { labelKey: 'navbar.faq', href: '/faq' },
  { labelKey: 'navbar.contacts', href: '/contacts' },
]


const Navbar = () => {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: '#021024', color: '#fff', padding: '10px 0' }}>
      <Toolbar sx={{ maxWidth: 'lg', width: '100vw', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            {navLinks.map((link) => (
              <MenuItem
                key={link.labelKey}
                onClick={handleMenuClose}
                component="a"
                href={link.href}
                sx={{ fontSize: '14px', fontWeight: 600, color: '#021024' }}
              >
                {t(link.labelKey)}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Logo */}
        <Typography
          variant="h4"
          component="div"
          className="logo"
          sx={{ fontWeight: 'bold', margin: 0, fontSize: { xs: '1.25rem', md: '2rem' } }}
        >
          Logo
        </Typography>

        {/* Desktop Links */}
        <Box className="navbar-links" sx={{ display: { xs: 'none', md: 'flex' }, gap: '2.5rem' }}>
          {navLinks.map((link) => (
            <Box
              component="a"
              key={link.labelKey}
              href={link.href}
              className="navbar-link"
              sx={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.2s',
                '&:hover': { color: '#7DA0CA' },
              }}
            >
              {t(link.labelKey)}
            </Box>
          ))}
        </Box>

        {/* Account and Currency */}
        <Box className="account-section" sx={{ ml: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          <AccountCircle sx={{ mr: 1 }} />
          <Typography component="span" sx={{ fontSize: '14px', fontWeight: 600 }}>
            {t('navbar.account')}
          </Typography>
          <DropdownCurrency />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar