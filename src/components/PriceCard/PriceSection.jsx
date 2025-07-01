import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import StoreContext from '../../stores/StoreContext'
import { Box, Grid} from '@mui/material'
import PriceCard from './PriceCard'

const priceCards = [
    {
        date: '1 Jan',
        weekday: 'Mon',
        price: '000 000',
        time: '00h 00m',
        dep: '00:00',
        depair: 'NQZ',
        arr: '00:00',
        arrair: 'ALA',
        layover: '0',
        badge: 'cheapest',
        badgeClass: 'price-card-badge-light',
    },
    {
        date: '1 Jan',
        weekday: 'Mon',
        price: '000 000',
        time: '01h 00m',
        dep: '00:00',
        depair: 'NQZ',
        arr: '00:00',
        arrair: 'ALA',
        layover: '0',
        badge: 'fastest',
        badgeClass: 'price-card-badge-dark',
    },
    {
        date: '1 Jan',
        weekday: 'Mon',
        price: '000 000',
        time: '02h 02m',
        dep: '00:00',
        depair: 'NQZ',
        arr: '00:00',
        arrair: 'ALA',
        layover: '1',
        badge: null,
        badgeClass: '',
    },
]

const PriceSection = () => {
    const { appStore } = useContext(StoreContext)
    const { t } = useTranslation()
    const currencySymbol = {
        KZT: '₸',
        RUB: '₽',
        USD: '$'
    }[appStore.selectedCurrency]

    return (
        <Box sx={{ background: 'var(--color-lighter)', py: 4, px: { xs: 1, sm: 3 } }}>
            <Grid container spacing={{ xs: 2, lg: 3 }} sx={{ maxWidth: '1120px', margin: '0 auto',py: '5', justifyContent: { xs: 'center', lg: 'space-between' } }}>
                {priceCards.map((card, idx) => (
                    <PriceCard
                        key={idx}
                        card={card}
                        currencySymbol={currencySymbol}
                        t={t}
                    />
                ))}
            </Grid>
        </Box>
    )
}

export default observer(PriceSection)