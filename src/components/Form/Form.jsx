import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import StoreContext from '../../stores/StoreContext';
import { Box, Button, IconButton, Paper, Typography, Stack, Select, MenuItem, TextField, useMediaQuery, useTheme } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import RouteIcon from '@mui/icons-material/Route';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { enUS, ru, kk } from 'date-fns/locale';
import DateFields from './DateFields';
import CitySelect from './CitySelect';
import PassengerClassSelect from './PassengerClassSelect';

const localeMap = { en: enUS, ru: ru, kz: kk };

const Form = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { appStore } = useContext(StoreContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    appStore.fetchCity()
  }, [])

  const cities = appStore.cityData?.cityResponseDTOList || [];

  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [isReturnFlight, setIsReturnFlight] = useState(true);
  const [passengers, setPassengers] = useState(appStore.passengers || 1);
  const [flightClass, setFlightClass] = useState(appStore.ticketClass || 'economy');

  const handleSwapCities = () => {
    setFromCity(toCity);
    setToCity(fromCity);
  };

  const getLocale = () => {
    if (i18n.language === 'kz') return localeMap.kz;
    if (i18n.language === 'ru') return localeMap.ru;
    return localeMap.en;
  };

  useEffect(() => {
    appStore.setPassengers(passengers);
    appStore.setTicketClass(flightClass);
  }, [passengers, flightClass, appStore]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={getLocale()}>
      <Box
        component="form"
        sx={{ width: '100%', maxWidth: 1200, margin: '0 auto', background: 'transparent', display: 'flex', flexDirection: 'column', py: isMobile ? 2 : 0 }}
        autoComplete="off"
      >
        <Paper
          elevation={0}
          sx={{ width: isMobile ? '90vw' : '100%', maxWidth: isMobile ? 900 : 1200, borderRadius: 3, p: 0, overflow: 'hidden', border: '3px solid var(--color-dark)', mx: 'auto', background: 'var(--white)' }}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems={{ xs: 'stretch', md: 'center' }}
            spacing={0}
            sx={{ background: '#fff', flexWrap: 'nowrap', width: '100%' }}
          >
            {/* From/To + Swap */}
            {isMobile ? (
              <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'stretch' }}>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <CitySelect
                    cities={cities}
                    value={fromCity}
                    setValue={setFromCity}
                    label={t('form.from')}
                    t={t}
                    sx={{ p: '8px 12px', boxSizing: 'border-box', borderBottom: '1px solid var(--gray-medium)' }}
                  />
                  <CitySelect
                    cities={cities}
                    value={toCity}
                    setValue={setToCity}
                    label={t('form.to')}
                    t={t}
                    sx={{ p: '8px 12px', boxSizing: 'border-box' }}
                  />
                </Box>
                <Box sx={{ alignSelf: 'center', height: '100%' }}>
                  <IconButton
                    onClick={handleSwapCities}
                    size="small"
                    sx={{ m: 1, borderRadius: '50%', border: '1px solid var(--gray-medium)', background: 'var(--white)', color: 'var(--text-color)', zIndex: 10 }}
                  >
                    <SwapHorizIcon />
                  </IconButton>
                </Box>
              </Box>
            ) : (
              <>
                <CitySelect
                  cities={cities}
                  value={fromCity}
                  setValue={setFromCity}
                  label={t('form.from')}
                  t={t}
                  sx={{ p: '16px 24px 16px 12px', boxSizing: 'border-box' }}
                  popperWidth={400}
                />
                <IconButton
                  onClick={handleSwapCities}
                  size="small"
                  sx={{ mx: -2, borderRadius: '50%', border: '1px solid var(--gray-medium)', background: 'var(--white)', color: 'var(--text-color)', zIndex: 10 }}
                >
                  <SwapHorizIcon />
                </IconButton>
                <CitySelect
                  cities={cities}
                  value={toCity}
                  setValue={setToCity}
                  label={t('form.to')}
                  t={t}
                  sx={{ p: '16px 12px 16px 24px', boxSizing: 'border-box' }}
                  popperWidth={400}
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
            <PassengerClassSelect
              onPassengersChange={(data) => console.log('Passengers:', data)}
              onClassChange={(value) => console.log('Class:', value)}
              t={t}
            />

            {/* Search Button */}
            <Box sx={{ display: 'flex', alignSelf: 'center', minWidth: { xs: '100%', md: '150px' } }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  px: 4,
                  py: 2,
                  background: 'var(--color-dark)',
                  color: 'var(--white)',
                  fontSize: 14,
                  fontWeight: 600,
                  boxShadow: 'none',
                  height: '100%',
                  width: '100%',
                  borderRadius: isMobile ? 0 : '0 8px 8px 0'
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
  );
};

export default observer(Form);