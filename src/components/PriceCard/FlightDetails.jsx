import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, IconButton, Box, Divider, Avatar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useTranslation } from 'react-i18next'

const FlightDetails = ({ open, onClose, card, t }) => {
    if (!card) return null

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {t('priceSection.flightDetails')}
                <IconButton aria-label="close" onClick={onClose} sx={{ color: (theme) => theme.palette.grey[500] }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <Box sx={{ mb: 2 }}>
                    <Typography><strong>{t('priceSection.date')}:</strong> {card.date} ({card.weekday})</Typography>
                    <Typography><strong>{t('priceSection.departure')}:</strong> {card.dep} ({card.depair})</Typography>
                    <Typography><strong>{t('priceSection.arrival')}:</strong> {card.arr} ({card.arrair})</Typography>
                    <Typography><strong>{t('priceSection.time')}:</strong> {card.time}</Typography>
                    <Typography><strong>{t('priceSection.layover')}:</strong> {card.layover} {t('priceSection.hours')}</Typography>
                    <Typography><strong>{t('priceSection.price')}:</strong> {card.price}</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />

                <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>{t('priceSection.fareType') || 'Тариф'}</Typography>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <Avatar src={card.airlineLogo} alt="Airline" sx={{ width: 32, height: 32 }} />
                        <Typography>Airline Name</Typography>
                        <Typography color="text.secondary">{card.fareName || 'farename'}</Typography>
                    </Box>
                    <Box sx={{ mt: 1, display: 'flex', gap: 2 }}>
                        <Typography variant="body2">{t('pricesection.features')}</Typography>
                        <Typography variant="body2">{t('pricesection.features')}</Typography>
                        <Typography variant="body2">{t('pricesection.features')}</Typography>
                    </Box>
                </Box>
                <Divider sx={{ my: 2 }} />

                <Button variant="contained" color="primary">{t('priceSection.buy') || 'Купить'}</Button>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>{t('priceSection.close')}</Button>
            </DialogActions>
        </Dialog>
    )
}

export default FlightDetails