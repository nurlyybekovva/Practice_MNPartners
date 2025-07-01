import { TextField } from '@mui/material'

const CityField = ({ value, onChange, placeholder, sx = {}, inputSx = {}, ...props }) => (
  <TextField
    variant="standard"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    InputProps={{
      disableUnderline: true,
      sx: inputSx,
    }}
    sx={sx}
    {...props}
  />
)

export default CityField