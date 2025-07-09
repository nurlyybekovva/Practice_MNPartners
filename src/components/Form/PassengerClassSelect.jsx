import React, { useState, useRef } from 'react';
import { Box, Typography, IconButton, Radio, RadioGroup, FormControlLabel, FormControl, Popover, Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Counter = ({ label, subLabel, value, onChange, min = 0 }) => (
    <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1">{label}</Typography>
        <Typography variant="caption" sx={{ color: 'gray' }}>{subLabel}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <IconButton
                onClick={() => onChange(Math.max(min, value - 1))}
                disabled={value <= min}
                size="small"
            >
                <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography sx={{ mx: 2, minWidth: 20, textAlign: 'center' }}>{value}</Typography>
            <IconButton onClick={() => onChange(value + 1)} size="small">
                <AddIcon fontSize="small" />
            </IconButton>
        </Box>
    </Box>
);

const PassengerClassSelect = ({ onPassengersChange, onClassChange }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [flightClass, setFlightClass] = useState('economy');

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const handleClassChange = (event) => {
        setFlightClass(event.target.value);
        onClassChange?.(event.target.value);
    };

    const handlePassengerChange = (type, value) => {
        const stateUpdate = { adults, children, infants, [type]: value };
        setAdults(stateUpdate.adults);
        setChildren(stateUpdate.children);
        setInfants(stateUpdate.infants);
        onPassengersChange?.(stateUpdate);
    };

    const passengerLabel = `${adults + children + infants} пассажиров, ${getClassLabel(flightClass)}`;

    function getClassLabel(code) {
        switch (code) {
            case 'economy': return 'Эконом';
            case 'comfort': return 'Комфорт';
            case 'business': return 'Бизнес';
            case 'first': return 'Первый класс';
            default: return '';
        }
    }

    return (
        <>
            <Button
                variant="outlined"
                onClick={handleOpen}
                sx={{ textTransform: 'none', width: 300, justifyContent: 'space-between', border: 'none', color: '#000' }}
            >
                {passengerLabel}
            </Button>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                PaperProps={{ sx: { p: 2, maxWidth: 400 } }}
            >
                <Typography variant="h6" gutterBottom>Количество пассажиров</Typography>

                <Counter
                    label="Взрослые"
                    subLabel="12 лет и старше"
                    value={adults}
                    onChange={(val) => handlePassengerChange('adults', val)}
                    min={1}
                />
                <Counter
                    label="Дети"
                    subLabel="от 2 до 11 лет"
                    value={children}
                    onChange={(val) => handlePassengerChange('children', val)}
                />
                <Counter
                    label="Младенцы"
                    subLabel="до 2 лет, без места"
                    value={infants}
                    onChange={(val) => handlePassengerChange('infants', val)}
                />

                <Box mt={2}>
                    <Typography variant="h6" gutterBottom>Класс обслуживания</Typography>
                    <FormControl>
                        <RadioGroup value={flightClass} onChange={handleClassChange}>
                            <FormControlLabel value="economy" control={<Radio />} label="Эконом" />
                            <FormControlLabel value="comfort" control={<Radio />} label="Комфорт" />
                            <FormControlLabel value="business" control={<Radio />} label="Бизнес" />
                            <FormControlLabel value="first" control={<Radio />} label="Первый класс" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Popover>
        </>
    );
};

export default PassengerClassSelect;
