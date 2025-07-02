import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Typography, Link, Avatar, Card, CardContent, Chip, Stack } from '@mui/material'
import FlightDetails from './FlightDetails'

const flexRow = { display: 'flex', flexDirection: 'row' }
const flexCol = { display: 'flex', flexDirection: 'column' }

const badgeVariants = {
    cheapest: { background: 'var(--color-dark)' },
    fastest: { background: 'var(--color-medium)' },
}

const PriceCard = ({ card, currencySymbol, t }) => {
    const [openModal, setOpenModal] = useState(false)
    const handleOpen = () => setOpenModal(true)
    const handleClose = () => setOpenModal(false)
    return (
        <>
            <Card elevation={1} sx={{ minWidth: { xs: '90%', sm: '500px' }, mx: 3, my: 1, borderRadius: 4, overflow: 'visible' }}>
                <CardContent sx={{ padding: 2, position: 'relative' }}>
                    {card.badges && card.badges.length > 0 && (
                        <Stack sx={{display: 'flex', flexDirection: 'row', gap: 2, position: 'absolute', top: '-12px', left: 32, zIndex: 2}}>
                            {card.badges.map((badge) => (
                                <Chip
                                    key={badge}
                                    label={t(`ticket.${badge}`)}
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '12px',
                                        color: '#fff',
                                        textTransform: 'uppercase',
                                        whiteSpace: 'nowrap',
                                        ...badgeVariants[badge],
                                    }}
                                />
                            ))}
                        </Stack>

                    )}
                    <Link
                        onClick={handleOpen}
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
                            py: { xs: 1, lg: 1.5},
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
                                                {card.depAirCode}
                                            </Typography>
                                        </Box>
                                        <Typography component="p" sx={{ fontSize: '14px' }}>—</Typography>
                                        <Box >
                                            <Typography component="p" sx={{ fontSize: '14px' }}>
                                                {card.arr}
                                            </Typography>
                                            <Typography component="p" sx={{ fontSize: '14px', color: 'gray' }}>
                                                {card.arrAirCode}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography component="p" sx={{ m: 0, fontSize: '14px' }}>
                                        {card.time} {t('ticket.onTheWay')}
                                    </Typography>
                                    <Typography component="p" sx={{ m: 0, fontSize: '14px' }}>
                                        {t('ticket.layover')} {card.layover} {t('ticket.hours')}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Link>
                </CardContent>
            </Card>
            <FlightDetails open={openModal} onClose={handleClose} card={card} t={t} />
        </>
    )
}

PriceCard.propTypes = {
    card: PropTypes.object.isRequired,
    currencySymbol: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
}

export default PriceCard
