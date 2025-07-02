import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const DateFields = ({ dateFrom, setDateFrom, dateTo, setDateTo, isReturnFlight, t }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ display: 'flex', flex: 1 }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        flex: 'none',
        width: { xs: '50%', lg: '180px' },
        borderRight: '1px solid var(--gray-medium)',
        borderTop: isMobile ? '1px solid var(--gray-medium)' : 0,
        background: 'var(--white)',
        px: 2, py: 1.5,
      }}>
        <DatePicker
          label={t('form.departure')}
          value={dateFrom}
          onChange={newValue => {
            setDateFrom(newValue);
            if (dateTo && newValue && newValue > dateTo) setDateTo(null);
          }}
          minDate={new Date()}
          slots={{
            openPickerButton: IconButton,
            openPickerIcon: CalendarTodayIcon,
          }}
          slotProps={{
            textField: {
              variant: 'standard',
              placeholder: t('form.departure'),
              InputProps: {
                disableUnderline: true,
                sx: { fontSize: 18, color: '#000', border: 'none', width: '100%', px: 0 },
              },
              sx: { width: '100%', '.MuiInputBase-input': { padding: 0 } },
            }
          }}
          format="dd.MM.yyyy"
        />
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        flex: 'none',
        width: { xs: '50%', lg: '180px' },
        borderRight: '1px solid var(--gray-medium)',
        borderTop: isMobile ? '1px solid var(--gray-medium)' : 0,
        background: 'var(--white)',
        px: 2, py: 1.5,
      }}>
        <DatePicker
          label={t('form.return')}
          value={dateTo}
          onChange={setDateTo}
          disabled={!isReturnFlight}
          minDate={dateFrom}
          slots={{
            openPickerButton: IconButton,
            openPickerIcon: CalendarTodayIcon,
          }}
          slotProps={{
            textField: {
              variant: 'standard',
              InputProps: {
                disableUnderline: true,
                sx: { fontSize: 18, color: '#000', border: 'none', width: '100%', px: 0 },
              },
              sx: { width: '100%', '.MuiInputBase-input': { padding: 0 } },
            }
          }}
          format="dd.MM.yyyy"
        />
      </Box>
    </Box>
  );
};

export default DateFields;