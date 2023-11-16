import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { useNotification } from 'hooks';

export const appTheme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
    },
    MuiDialog: {
      defaultProps: {
        fullWidth: true,
        maxWidth: 'xs',
      },
    },
    MuiSwitch: {
      defaultProps: {
        color: 'secondary',
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'text',
        disableElevation: false,
      },
      styleOverrides: {
        sizeLarge: { minHeight: 48, minWidth: 48 },
        sizeMedium: { minHeight: 40, minWidth: 40 },
        sizeSmall: { minHeight: 32, minWidth: 32 },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiPagination: {
      defaultProps: {
        variant: 'outlined',
        shape: 'rounded',
        size: 'medium',
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
        color: 'primary',
        InputLabelProps: { shrink: true },
      },
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    button: { fontWeight: 600, textTransform: 'none' },
  },
  palette: {
    primary: {
      main: '#673ab7',
    },
    secondary: {
      main: '#3d5afe',
    },
    info: {
      main: '#33c9dc',
    },
    mode: 'light',
  },
});

type ContainerType = {
  children: React.ReactNode;
};

const Theme = ({ children }: ContainerType) => {
  useNotification();
  return (
    <ThemeProvider theme={responsiveFontSizes(appTheme)}>
      <LocalizationProvider dateAdapter={AdapterLuxon}>{children}</LocalizationProvider>
    </ThemeProvider>
  );
};

export default Theme;
