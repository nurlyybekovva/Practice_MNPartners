import { Autocomplete, TextField, Box, Typography } from '@mui/material'
import { useState } from 'react'

const CitySelect = ({ cities, value, setValue, label, t, sx = {}, inputSx = {}, ...props }) => {
  const [inputValue, setInputValue] = useState('')

  const selectedCity = cities.find((city) => city.iataCode === value) || null

  const handleChange = (event, newCity) => {
    if (newCity) {
      setValue(newCity.iataCode)
    }
  }

  return (
    <Autocomplete
      options={cities}
      getOptionLabel={(option) => option?.name ? `${option.name} ${option.iataCode}` : ''}
      value={selectedCity}
      onChange={handleChange}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
      }}
      isOptionEqualToValue={(option, value) => option.iataCode === value.iataCode}
      renderOption={(props, option) => (
        <Box
          component="li"
          {...props}
          sx={{ display: 'flex', width: '100%', gap: 1, }}
        >
          <Typography>{option.name}</Typography>
          <Typography sx={{ color: 'gray' }}>{option.iataCode}</Typography>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={!value ? label : ''}
          variant="outlined"
          InputLabelProps={{ shrink: false }}
          sx={{
            backgroundColor: 'white',
            minWidth: '100%',
            '& .MuiOutlinedInput-root': {
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              px: '0 !important'
            },
            '& .MuiOutlinedInput-input': {
              fontSize: 16,
              color: '#000',
              padding: '0 !important',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              ...inputSx,
            }
          }}
        />
      )}
      sx={{
        flex: 1,
        borderRight: '1px solid var(--gray-medium)',
        minWidth: { xs: '100px', md: '200px' },
        ...sx
      }}
      disableClearable
      popupIcon={null}
      {...props}
    />
  )
}

export default CitySelect
