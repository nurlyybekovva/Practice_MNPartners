import React, { useState, useRef } from 'react';
import { Box, Typography, IconButton, Popover, ButtonGroup, Button } from '@mui/material';
import PassengerCounter from './PassengerCounter';

const PassengerClassSelect = ({ onPassengersChange, onClassChange, t }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [flightClass, setFlightClass] = useState('economy');

    const buttonStyles = { p: '5px 20px', textTransform: 'none', whiteSpace: 'nowrap' }

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

    const passengerLabel = `${adults + children + infants} ${t('passengers.passengers')}`
    const classLabel = `${getClassLabel(flightClass)}`

    function getClassLabel(code) {
        switch (code) {
            case 'economy': return t('class.economyClass');
            case 'comfort': return t('class.comfortClass');
            case 'business': return t('class.businessClass');
            case 'first': return t('class.firstClass');
            default: return '';
        }
    }

    return (
        <>
            <Button
                variant="outlined"
                onClick={handleOpen}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textTransform: 'none', width: 300, border: 'none', color: '#000', }}
            >
                <Typography sx={{ fontSize: 14, color: 'var(--gray-medium)' }} >{classLabel}</Typography>
                <Typography sx={{ fontSize: 18 }} >{passengerLabel}</Typography>
            </Button>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                PaperProps={{ sx: { p: 2, maxWidth: 400 } }}
            >
                <Box my={2} >
                    <ButtonGroup
                        variant="text"
                        aria-label="text button group"
                        sx={{
                            p: '5px',
                            backgroundColor: 'var(--color-dark)',
                            borderRadius: 4,
                            gap: 1,
                            '& .MuiButtonGroup-grouped:not(:last-of-type)': { borderRight: 'none' },
                            '& .MuiButton-root': { border: 'none', borderRadius: 3 },
                        }}>
                        <Button
                            onClick={() => handleClassChange({ target: { value: 'economy' } })}
                            sx={{ ...buttonStyles, backgroundColor: flightClass === 'economy' ? 'var(--color-lighter)' : 'transparent', color: flightClass === 'economy' ? 'var(--color-black)' : 'var(--white)', }}
                        >
                            {t('class.economyClass')}
                        </Button>
                        <Button
                            onClick={() => handleClassChange({ target: { value: 'comfort' } })}
                            sx={{ ...buttonStyles, backgroundColor: flightClass === 'comfort' ? 'var(--color-lighter)' : 'transparent', color: flightClass === 'comfort' ? 'var(--color-black)' : 'var(--white)', }}
                        >
                            {t('class.comfortClass')}
                        </Button>
                        <Button
                            onClick={() => handleClassChange({ target: { value: 'business' } })}
                            sx={{ ...buttonStyles, backgroundColor: flightClass === 'business' ? 'var(--color-lighter)' : 'transparent', color: flightClass === 'business' ? 'var(--color-black)' : 'var(--white)', }}
                        >
                            {t('class.businessClass')}
                        </Button>
                        <Button
                            onClick={() => handleClassChange({ target: { value: 'first' } })}
                            sx={{ ...buttonStyles, backgroundColor: flightClass === 'first' ? 'var(--color-lighter)' : 'transparent', color: flightClass === 'first' ? 'var(--color-black)' : 'var(--white)', }}
                        >
                            {t('class.firstClass')}
                        </Button>
                    </ButtonGroup>
                </Box>

                <Box mx={1}>
                    <PassengerCounter
                        label={t('passengers.adults')}
                        subLabel={t('passengers.adultsSub')}
                        value={adults}
                        onChange={(val) => handlePassengerChange('adults', val)}
                        min={1}
                    />
                    <PassengerCounter
                        label={t('passengers.children')}
                        subLabel={t('passengers.childrenSub')}
                        value={children}
                        onChange={(val) => handlePassengerChange('children', val)}
                    />
                    <PassengerCounter
                        label={t('passengers.infants')}
                        subLabel={t('passengers.infantsSub')}
                        value={infants}
                        onChange={(val) => handlePassengerChange('infants', val)}
                    />
                </Box>

            </Popover>
        </>
    );
};

export default PassengerClassSelect;
