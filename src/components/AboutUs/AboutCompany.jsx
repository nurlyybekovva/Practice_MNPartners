import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import HeroImg from '../../assets/Hero.png'
import HeroMobile from '../../assets/HeroMobile.png'

const AboutCompany = () => {
  return (
    <Box>
      <Box
        className="hero-section"
        sx={{
          width: '100%',
          height: { xs: '350px', lg: '450px' },
          overflowX: 'hidden',
          backgroundImage: { xs: `url(${HeroMobile})`, lg: `url(${HeroImg})` },
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
        }}>
        <Container maxWidth="lg" sx={{ padding: { xs: '50px 30px 0', md: '150px 20px 0' } }}>
          <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', md: '2.5rem' }, width: { xs: '80%', lg: '60%' }, whiteSpace: 'normal' }}>
            Находим лучшие авиабилеты — быстро, удобно и без переплат
          </Typography>
        </Container>
      </Box>
      <Box className="company-section" sx={{ width: '100%', height: '600px', backgroundColor: 'var(--color-light)' }}>

      </Box>
    </Box>
  )
}

export default AboutCompany
