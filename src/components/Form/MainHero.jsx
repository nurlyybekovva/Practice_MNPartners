import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import Form from './Form.jsx'
import { useTranslation } from 'react-i18next'

const MainHero = () => {
  const { t } = useTranslation()

  console.log('MainHero component rendered')

  return (
    <Box sx={{ background: 'var(--color-lighter)', py: { xs: 5, md: 7 }, color: '#fff' }}>
      <Container maxWidth="lg">
        <Box
          className="hero-section"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: 400,
            gap: 4
          }}
        >
          <Box
            className="hero-content"
            sx={{
              background: 'var(--color-medium)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              flex: 1,
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto',
              padding: { xs: '64px 16px 40px', md: '180px 70px 60px' },
              borderRadius: 2,
              boxSizing: 'border-box',
              overflowX: 'hidden',
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '1.5rem', md: '2rem' } }}>
              {t('mainHero.title')}
            </Typography>
            <Button
              variant="contained"
              color="white"
              sx={{
                background: 'var(--color-darker)',
                opacity: 0.9,
                color: '#fff',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontSize: { xs: '0.875rem', md: '1rem' },
                boxShadow: 'none',
                '&:hover': { opacity: 1 },
              }}
            >
              {t('mainHero.explore')}
            </Button>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Form />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default MainHero