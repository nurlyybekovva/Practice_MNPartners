import React, { useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import StoreContext from '../stores/StoreContext'
import { Box, Button, IconButton, Paper, Typography, Stack, useMediaQuery, useTheme } from '@mui/material'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import RouteIcon from '@mui/icons-material/Route'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { enUS, ru, kk } from 'date-fns/locale'
import FromToField from './FromToField'
import DateFields from './DateFields'

const localeMap = { en: enUS, ru: ru, kz: kk, }

const Form = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const { appStore } = useContext(StoreContext)
    const { t, i18n } = useTranslation()
    const [fromCity, setFromCity] = useState('')
    const [toCity, setToCity] = useState('')
    const [dateFrom, setDateFrom] = useState(null)
    const [dateTo, setDateTo] = useState(null)
    const [isReturnFlight, setIsReturnFlight] = useState(true)

    const handleSwapCities = () => {
        setFromCity(toCity)
        setToCity(fromCity)
    }

    // Pick locale for date-fns
    const getLocale = () => {
        if (i18n.language === 'kz') return localeMap.kz
        if (i18n.language === 'ru') return localeMap.ru
        return localeMap.en
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={getLocale()}>
            <Box
                component="form"
                sx={{ width: '100%', maxWidth: 1200, margin: '0 auto', background: 'transparent', display: 'flex',
                    flexDirection: 'column',
                    py: isMobile ? 2 : 0 }}
                autoComplete="off"
            >
                <Paper
                    elevation={0}
                    sx={{ width: isMobile ? '90vw' : '100%',
                        maxWidth: isMobile ? 900 : 1200,
                        borderRadius: 3,
                        p: 0,
                        overflow: 'hidden',
                        border: '3px solid var(--color-dark)',
                        mx: 'auto',
                        background: 'var(--white)', }}>
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        alignItems={{ xs: 'stretch', md: 'center' }}
                        spacing={0}
                        sx={{ background: '#fff', flexWrap: 'wrap' }}
                    >
                        {/* From/To + Swap */}
                        {isMobile ? (
                            // Mobile ver
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
                                alignItems: 'stretch',
                            }}>
                                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <FromToField
                                        value={fromCity}
                                        onChange={e => setFromCity(e.target.value)}
                                        placeholder={t('form.from')}
                                        sx={{ minWidth: '100px', '& .MuiInputBase-input': { p: 0 } }}
                                        inputSx={{ fontSize: 18, padding: '12px 16px', background: 'white', borderBottom: '1px solid var(--gray-medium)' }}
                                    />
                                    <FromToField
                                        value={toCity}
                                        onChange={e => setToCity(e.target.value)}
                                        placeholder={t('form.to')}
                                        sx={{ minWidth: '100px', '& .MuiInputBase-input': { p: 0 } }}
                                        inputSx={{ fontSize: 18, padding: '12px 16px', background: 'white', borderBottom: isMobile ? 0 : '1px solid var(--gray-medium)', borderRadius: 0 }}
                                    />
                                </Box>
                                <Box sx={{alignSelf: 'center', height: '100%'}}>
                                    <IconButton
                                    onClick={handleSwapCities}
                                    size='small'
                                    sx={{
                                        m: 1,
                                        borderRadius: '50%',
                                        border: '1px solid var(--gray-medium)',
                                        background: 'var(--white)',
                                        color: 'var(--text-color)',
                                        zIndex: 10,
                                    }}
                                >
                                    <SwapHorizIcon />
                                </IconButton>
                                </Box>

                            </Box>
                        ) : (
                            // Desktop ver
                            <>
                                {/* From */}
                                <FromToField
                                    value={fromCity}
                                    onChange={e => setFromCity(e.target.value)}
                                    placeholder={t('form.from')}
                                    sx={{ flex: 1, minWidth: { xs: '100px', lg: '200px' }, '& .MuiInputBase-input': { p: 0 } }}
                                    inputSx={{ fontSize: 18, padding: { xs: '12px 16px', md: '24px 28px 24px 16px' }, background: 'white', borderRight: '1px solid var(--gray-medium)' }}
                                />

                                {/* Swap Button */}
                                <IconButton
                                    onClick={handleSwapCities}
                                    size='small'
                                    sx={{
                                        mx: -2,
                                        borderRadius: '50%',
                                        border: '1px solid var(--gray-medium)',
                                        background: 'var(--white)',
                                        color: 'var(--text-color)',
                                        zIndex: 10,
                                    }}
                                >
                                    <SwapHorizIcon />
                                </IconButton>

                                {/* To */}
                                <FromToField
                                    value={toCity}
                                    onChange={e => setToCity(e.target.value)}
                                    placeholder={t('form.to')}
                                    sx={{ flex: 1, minWidth: { xs: '100px', lg: '200px' }, '& .MuiInputBase-input': { p: 0 } }}
                                    inputSx={{ fontSize: 18, padding: { xs: '12px 16px', md: '24px 48px 24px 28px' }, background: 'white', borderRight: '1px solid var(--gray-medium)', borderRadius: 0 }}
                                />
                            </>
                        )}


                        {/* Dates with DatePicker */}
                        <DateFields
                            dateFrom={dateFrom}
                            setDateFrom={setDateFrom}
                            dateTo={dateTo}
                            setDateTo={setDateTo}
                            isReturnFlight={isReturnFlight}
                            t={t}
                        />

                        {/* Passenger & Class */}
                        <Box
                            sx={{
                                flex: 1,
                                background: 'var(--white)',
                                px: 2,
                                py: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                minWidth: 100,
                                borderTop: isMobile ? '1px solid var(--gray-medium)' : 0,
                            }}
                        >
                            <Typography sx={{ color: 'var(--gray-darker)', fontSize: 14 }}>
                                {appStore.ticketClass}
                            </Typography>
                            <Typography sx={{ fontSize: 18, mt: 0.5 }}>
                                {appStore.passengers}
                            </Typography>
                        </Box>

                        {/* Search Button */}
                        <Box sx={{ display: 'flex', alignSelf: 'stretch' }}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    px: 3,
                                    py: 2,
                                    background: 'var(--color-dark)',
                                    color: 'var(--white)',
                                    fontSize: 14,
                                    fontWeight: 600,
                                    boxShadow: 'none',
                                    height: '100%',
                                }}
                                fullWidth
                            >
                                {t('form.search')}
                            </Button>
                        </Box>
                    </Stack>
                </Paper>

                {/* Additional Options */}
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <Button
                        type="button"
                        startIcon={<RouteIcon />}
                        sx={{
                            color: 'var(--gray-darker)',
                            fontSize: 14,
                            background: 'none',
                            boxShadow: 'none',
                            textTransform: 'none',
                            p: 0,
                            minWidth: 0,
                            mr: 3,
                            '&:hover': { background: 'transparent', color: 'var(--color-dark)' },
                        }}
                    >
                        {t('form.multiCity')}
                    </Button>
                </Box>
            </Box>
        </LocalizationProvider>
    )
}

export default observer(Form)