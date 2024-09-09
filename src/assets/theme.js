import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Primary color for the app
    },
    secondary: {
      main: '#f50057', // Secondary color for the app
    },
    // Customize other palette options here
  },
  typography: {
    fontFamily: 'var(--dxp-s-body-font-family)', // Specify your custom font and fallback options
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'white !important  ', // AppBar background color
          color: 'black !important',            // AppBar text color
          boxShadow:"none !important",
          height:"72px",
          padding:"8px 0px"
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '64px',           // AppBar Toolbar height
        },
      },
    },
    // Customize other components here

    MuiCssBaseline: {
        styleOverrides: {
          '@global': {
            // Ensure the global font-family is set to Inter
            body: {
              fontFamily:  'var(--dxp-s-body-font-family)',
            },
          },
        },
      },
  },
});

export default theme;
