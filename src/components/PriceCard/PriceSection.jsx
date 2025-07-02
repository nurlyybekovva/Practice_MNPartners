import { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import StoreContext from '../../stores/StoreContext'
import { Box, Grid } from '@mui/material'
import PriceCard from './PriceCard'
import { format } from 'date-fns';
import { kk, ru, enUS } from 'date-fns/locale';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const PriceSection = () => {
    const { appStore } = useContext(StoreContext)
    const { t, i18n } = useTranslation()
    useEffect(() => {
        appStore.fetchTickets()
    }, [])

    const currencySymbol = {
        KZT: '₸',
        RUB: '₽',
        USD: '$'
    }[appStore.selectedCurrency]

    const localeMap = { en: enUS, ru: ru, kz: kk };
    const getLocale = () => {
        if (i18n.language === 'kz') return localeMap.kz;
        if (i18n.language === 'ru') return localeMap.ru;
        return localeMap.en;
    };

    // Calculate cheapest and fastest
    const tickets = appStore.ticketData?.ticketResponseDTOList || [];
    let minPrice = Infinity;
    let minDuration = Infinity;

    tickets.forEach(ticket => {
        const depTime = new Date(ticket.flight.departureTime);
        const arrTime = new Date(ticket.flight.arrivalTime);
        const duration = (arrTime - depTime) / 1000 / 60;
        if (ticket.price < minPrice) minPrice = ticket.price;
        if (duration < minDuration) minDuration = duration;
    });

    const mappedTickets = appStore.ticketData?.ticketResponseDTOList?.map((ticket) => {
        const depTime = new Date(ticket.flight.departureTime)
        const arrTime = new Date(ticket.flight.arrivalTime)

        const durationInMinutes = (arrTime - depTime) / 1000 / 60
        const hours = Math.floor(durationInMinutes / 60)
        const minutes = durationInMinutes % 60

        const badges = []
        if (ticket.price === minPrice) badges.push('cheapest')
        if (durationInMinutes === minDuration) badges.push('fastest')

        return {
            date: format(depTime, 'd MMM', { locale: getLocale() }),
            weekday: format(depTime, 'EEE', { locale: getLocale() }),
            price: ticket.price.toLocaleString(),
            time: `${hours}${t('datetime.hour')} ${minutes.toString().padStart(2, '0')}${t('datetime.min')}`,
            dep: depTime.toTimeString().slice(0, 5),
            depCity: ticket.flight.cityOfDeparture.name,
            depAirCode: ticket.flight.cityOfDeparture.iataCode,
            arr: arrTime.toTimeString().slice(0, 5),
            arrCity: ticket.flight.cityOfArrival.name,
            arrAirCode: ticket.flight.cityOfArrival.iataCode,
            layover: '0',
            badges,
        }
    })

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={getLocale()}>
            <Box sx={{ background: 'var(--color-lighter)', py: 4, px: { xs: 1, sm: 3 } }}>
                <Grid container spacing={{ xs: 2, lg: 3 }} sx={{ maxWidth: '1120px', margin: '0 auto', py: '5', justifyContent: { xs: 'center', lg: 'space-between' } }}>
                    {mappedTickets?.map((card, idx) => (
                        <PriceCard
                            key={idx}
                            card={card}
                            currencySymbol={currencySymbol}
                            t={t}
                        />
                    ))}
                </Grid>
            </Box>
        </LocalizationProvider>

    )
}

export default observer(PriceSection)