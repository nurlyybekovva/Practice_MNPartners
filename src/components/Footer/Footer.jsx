import React from 'react'
import { Box, Typography, Divider, Link, IconButton, Stack, Container } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/logo.png'

const companyLinks = [
  { label: 'footer.link', href: '#' },
  { label: 'footer.link', href: '#' },
]

const quickLinks = [
  { label: 'footer.link', href: '#' },
  { label: 'footer.link', href: '#' },
  { label: 'footer.link', href: '#' },
  { label: 'footer.link', href: '#' },
  { label: 'footer.link', href: '#' },
]

const contactLinks = [
  { icon: <PhoneIcon fontSize="small" />, text: '+7 777 777 77 77' },
  { icon: <EmailIcon fontSize="small" />, text: 'info@company.kz' },
  { icon: <LocationOnIcon fontSize="small" />, text: 'footer.address' },
]

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <Box component="footer" sx={{ background: '#021024', color: '#fff', pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 4, mb: 4 }}>
          {/* Company Info */}
          <Box sx={{ minWidth: 220 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
              <Box component="img" src={logo} alt="Logo" sx={{ width: 100, mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {t('footer.company')}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#b0b8c1' }}>
              {t('footer.companyDesc')}
            </Typography>
          </Box>

          {/* Links */}
          <Box sx={{ display: 'flex', gap: { xs: 6, lg: 20 }, flexWrap: 'wrap' }}>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                {t('footer.company')}
              </Typography>
              <Stack spacing={1}>
                {companyLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    color="inherit"
                    underline="none"
                    sx={{
                      fontSize: 14,
                      transition: 'color 0.2s',
                      '&:hover': { color: '#7DA0CA' },
                    }}
                  >
                    {t(link.label)}
                  </Link>
                ))}
              </Stack>
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                {t('footer.quickLinks')}
              </Typography>
              <Stack spacing={1}>
                {quickLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    color="inherit"
                    underline="none"
                    sx={{
                      fontSize: 14,
                      transition: 'color 0.2s',
                      '&:hover': { color: '#7DA0CA' },
                    }}
                  >
                    {t(link.label)}
                  </Link>
                ))}
              </Stack>
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                {t('footer.contactUs')}
              </Typography>
              <Stack spacing={1}>
                {contactLinks.map((item, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {item.icon}
                    <Typography variant="body2">
                      {item.text.startsWith('footer.') ? t(item.text) : item.text}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ background: '#b0b8c1', mb: 3 }} />

        <Box sx={{
          display: 'flex', flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 2,
        }}>
          <Typography variant="body2">
            {t('footer.copyright', { year: currentYear })}
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton component="a" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff' }}>
              <InstagramIcon />
            </IconButton>
            <IconButton component="a" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton component="a" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff' }}>
              <YouTubeIcon />
            </IconButton>
            <IconButton component="a" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff' }}>
              <TwitterIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer