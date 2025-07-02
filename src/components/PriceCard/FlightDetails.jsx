import React from 'react'
import { Dialog, DialogContent, Button, Typography, IconButton, Box, Divider, Avatar, Paper } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useTranslation } from 'react-i18next'

const FlightDetails = ({ open, onClose, card, t }) => {
    if (!card) return null

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            PaperProps={{
                sx: {
                    width: { xs: '90%', md: 600 },
                    borderRadius: 4,
                    bgcolor: 'white'
                }
            }}>
            <Box sx={{ position: 'absolute', top: 0, right: 0, m: '16px 16px 0 0', zIndex: 50 }}>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{ color: 'grey.500', bgcolor: 'grey.100', cursor: 'pointer' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <DialogContent sx={{ p: '40px 24px 20px' }}>

                <Box sx={{ m: 0, p: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                            <Typography component="h6" sx={{ fontSize: '18px', fontWeight: 600 }}> {card.depCity} </Typography>
                            <Typography component="h6" sx={{ fontSize: '18px', fontWeight: 600 }}>—</Typography>
                            <Typography component="h6" sx={{ fontSize: '18px', fontWeight: 600 }}> {card.arrCity} </Typography>
                        </Box>
                        <Typography component="p" sx={{ m: 0, fontSize: '14px', color: 'gray' }}>
                            {card.time} {t('ticket.onTheWay')}
                        </Typography>

                    </Box>
                    <Paper
                        elevation={1}
                        sx={{
                            bgcolor: 'var(--color-lighter)',
                            borderRadius: 2,
                            p: 3,
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar alt="Airline" src="#" sx={{ width: '40px', height: '40px' }} />
                            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: 14 }}>
                                    <Typography sx={{ display: 'flex', alignItems: 'center', height: 24 }}>{card.airlineName || 'Airline'}</Typography>
                                    <Typography sx={{ mt: 0.5, color: 'grey.500', fontSize: 14 }}>{card.time}</Typography>
                                </Box>
                                <Typography sx={{ mt: 0.5, color: 'grey.500', fontSize: 14 }}>{card.flightNumber || 'Flight number'}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 40, pt: 4 }}>
                                {/* Departure circle */}
                                <Box sx={{
                                    width: 12, height: 12, borderRadius: '50%',
                                    border: '3px solid var(--color-darker)', bgcolor: 'var(--color-lighter)', zIndex: 1
                                }} />
                                {/* Vertical line */}
                                <Box sx={{
                                    width: 2, flex: 1, bgcolor: 'var(--color-darker)', minHeight: 50
                                }} />
                                {/* Arrival circle */}
                                <Box sx={{
                                    width: 12, height: 12, borderRadius: '50%',
                                    border: '3px solid var(--color-darker)', bgcolor: 'var(--color-lighter)', zIndex: 1
                                }} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                {/* Departure */}
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', pl: 1, mt: 3, position: 'relative', pb: 2 }}>
                                    <Box sx={{ width: '33%' }}>
                                        <Typography sx={{ fontWeight: 700, fontSize: 16 }}>{card.dep}</Typography>
                                        <Typography sx={{ mt: 0.5, color: 'grey.500', fontSize: 14 }}>{card.date}, {card.weekday}</Typography>
                                    </Box>
                                    <Box sx={{ width: '67%', pl: 2 }}>
                                        <Typography sx={{ fontWeight: 700, fontSize: 16 }}>{card.depCity}</Typography>
                                        <Typography sx={{ mt: 0.5, color: 'grey.500', fontSize: 14 }}>{card.depCity}, {card.depAirCode}</Typography>
                                    </Box>
                                </Box>
                                {/* Arrival */}
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', pl: 1, position: 'relative', pb: 2 }}>
                                    <Box sx={{ width: '33%' }}>
                                        <Typography sx={{ fontWeight: 700, fontSize: 16 }}>{card.arr}</Typography>
                                        <Typography sx={{ mt: 0.5, color: 'grey.500', fontSize: 14 }}>{card.date}, {card.weekday}</Typography>
                                    </Box>
                                    <Box sx={{ width: '67%', pl: 2 }}>
                                        <Typography sx={{ fontWeight: 700, fontSize: 16 }}>{card.arrCity}</Typography>
                                        <Typography sx={{ mt: 0.5, color: 'grey.500', fontSize: 14 }}>{card.arrCity}, {card.arrAirCode}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>

                </Box>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ p: '12px 24px', display: 'flex', justifyContent: 'flex-end', gap: 2  }}>
                    <Button variant="contained" sx={{ p: '8px 24px', bgcolor: 'var(--color-darker)', borderRadius: 3 }}>{t('ticket.buy')}</Button>
                    <Button variant="contained" sx={{ p: '8px 24px', bgcolor: 'var(--color-darker)', borderRadius: 3 }}>{t('ticket.book')}</Button>
                </Box>


            </DialogContent>
        </Dialog>
    )
}

export default FlightDetails