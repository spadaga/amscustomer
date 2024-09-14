import logo from './logo.svg';
import './App.css';
import MasterLayout from './Layout/MasterLayout';
import Routing from './routing/Routing';
import './Theme/Theme.css'
import { ThemeProvider } from '@mui/material';
import theme from './Theme/theme.js'
import { SnackbarProvider } from './toast/SnackbarProvider.js';


function App() {
  return (

    <ThemeProvider theme={theme}><SnackbarProvider>
      <Routing /></SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
