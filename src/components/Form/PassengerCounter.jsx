import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const PassengerCounter = ({ label, subLabel, value, onChange, min = 0, max = 9 }) => (
    <Box sx={{ mb: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', py: 0.5 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="subtitle1">{label}</Typography>
            <Typography variant="caption" sx={{ color: 'gray' }}>{subLabel}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 1 }}>
            <IconButton
                onClick={() => onChange(Math.max(min, value - 1))}
                size="small"
                sx={{
                    backgroundColor: value <= min ? 'var(--gray-light)' : 'var(--color-dark)',
                    color: value <= min ? 'var(--gray-medium)' : 'var(--white)',
                    '&:hover': {
                        backgroundColor: value <= min ? 'var(--gray-light)' : 'var(--color-dark)'
                    }
                }}
            >
                <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography sx={{ mx: 2, minWidth: 20, textAlign: 'center' }}>{value}</Typography>
            <IconButton
                onClick={() => onChange(Math.min(max, value + 1))}
                size="small"
                sx={{
                    backgroundColor: value >= max ? 'var(--gray-light)' : 'var(--color-dark)',
                    color: value >= max ? 'var(--gray-medium)' : 'var(--white)',
                    '&:hover': {
                        backgroundColor: value >= max ? 'var(--gray-light)' : 'var(--color-dark)'
                    }
                }}
            >
                <AddIcon fontSize="small" />
            </IconButton>
        </Box>
    </Box>
);

export default PassengerCounter;
