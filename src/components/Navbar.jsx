import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import DropdownCurrency from './DropdownCurrency'

const navLinks = [
  { label: 'Link 1', href: '#' },
  { label: 'Link 2', href: '#' },
  { label: 'Link 3', href: '#' },
  { label: 'Link 4', href: '#' },
  { label: 'Link 5', href: '#' },
]

const Navbar = () => {
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
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen} sx={{}}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
            {navLinks.map((link) => (
              <MenuItem key={link.label} onClick={handleMenuClose} component="a" href={link.href}
                sx={{ fontSize: '14px', fontWeight: 600, color: '#021024' }}>
                {link.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Logo */}
        <Typography variant="h4" component="div" className="logo"
          sx={{ fontWeight: 'bold', margin: 0, fontSize: { xs: '1.25rem', md: '2rem' } }}>
          Logo
        </Typography>

        {/* Desktop Links */}
        <Box className="navbar-links" sx={{ display: { xs: 'none', md: 'flex' }, gap: '2.5rem' }}>
          {navLinks.map((link) => (
            <Box component="a" key={link.label} href={link.href} className="navbar-link"
              sx={{ fontSize: '14px', fontWeight: 600, color: 'white', textDecoration: 'none',
                transition: 'color 0.2s', '&:hover': { color: '#7DA0CA' },
               }}>
              {link.label}
            </Box>
          ))}
        </Box>

        <Box className="account-section" sx={{ ml: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          <AccountCircle sx={{ mr: 1 }} />
          <Typography variant="p" component="div" className="logo" sx={{ fontSize: '14px', fontWeight: 600 }}>
            Account
          </Typography>
          <DropdownCurrency />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar