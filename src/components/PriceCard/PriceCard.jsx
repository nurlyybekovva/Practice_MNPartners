import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography, Link, Avatar, Card, CardContent, Badge } from '@mui/material'

const flexRow = { display: 'flex', flexDirection: 'row' }
const flexCol = { display: 'flex', flexDirection: 'column' }
const badgeVariants = {
    'price-card-badge-dark': { background: 'var(--color-dark)' },
    'price-card-badge-light': { background: 'var(--color-medium)' },
}


const PriceCard = ({ card, currencySymbol, t }) => {
    return (
        <Card elevation={1} sx={{ minWidth: { xs: '90%', sm: '500px' }, mx: 3, my: 1, borderRadius: 4, overflow: 'visible' }}>
            <CardContent sx={{ padding: 2, position: 'relative' }}>
                {card.badge && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '-12px',
                            left: 32,
                            p: '3px 16px',
                            borderRadius: '8px',
                            fontSize: 'var(--normal-font-size)',
                            fontWeight: 'var(--font-semi-bold)',
                            color: 'var(--white)',
                            zIndex: 2,
                            whiteSpace: 'nowrap',
                            ...(badgeVariants[card.badgeClass] || {}),
                        }}
                    >
                        {t
                            ? t(`priceSection.${card.badge}`)
                            : card.badge}
                    </Box>
                )}
                <Link href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    color="inherit"
                    aria-label="View flight details"
                    sx={{
                        ...flexCol,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textDecoration: 'none',
                        color: 'var(--black)',
                        px: { xs: 1.5, lg: 2 },
                        position: 'relative',
                    }}>
                    <Box sx={{ ...flexCol, width: '100%' }}>
                        <Box sx={{ ...flexRow, justifyContent: 'space-between' }}>
                            <Typography component="h6" sx={{ fontSize: '24px', fontWeight: 700, mb: '2px' }}>
                                {card.price} {currencySymbol}
                            </Typography>
                            <Box sx={{ ...flexRow, alignItems: 'center', gap: 1.5 }}>
                                <Avatar alt="Airline" src="#" sx={{ width: '30px', height: '30px' }} />
                                <Typography component="p" sx={{ fontSize: '16px', mb: '2px' }}>
                                    Airline
                                </Typography>
                            </Box>

                        </Box>
                        <Box sx={{ ...flexRow, justifyContent: 'space-between', alignItems: 'flex-end', width: '70%' }}>
                            <Box sx={{ width: '40%' }}>
                                <Typography component="p" sx={{ fontSize: '14px' }}>
                                    {card.date}, {card.weekday}
                                </Typography>
                                <Box sx={{ ...flexRow, justifyContent: 'space-between' }}>
                                    <Box >
                                        <Typography component="p" sx={{ fontSize: '14px' }}>
                                            {card.dep}
                                        </Typography>
                                        <Typography component="p" sx={{ fontSize: '14px', color: 'gray' }}>
                                            {card.depair}
                                        </Typography>
                                    </Box>
                                    <Typography component="p" sx={{ fontSize: '14px' }}>—</Typography>
                                    <Box >
                                        <Typography component="p" sx={{ fontSize: '14px' }}>
                                            {card.arr}
                                        </Typography>
                                        <Typography component="p" sx={{ fontSize: '14px', color: 'gray' }}>
                                            {card.arrair}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography component="p" sx={{ m: 0, fontSize: '14px' }}>
                                    {card.time} {t('priceSection.onTheWay')}
                                </Typography>
                                <Typography component="p" sx={{ m: 0, fontSize: '14px' }}>
                                    {t('priceSection.layover')} {card.layover} {t('priceSection.hours')}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Link>
            </CardContent>
        </Card>
    )
}

PriceCard.propTypes = {
    card: PropTypes.object.isRequired,
    currencySymbol: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
}

export default PriceCard
