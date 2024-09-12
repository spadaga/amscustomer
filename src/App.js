import logo from './logo.svg';
import './App.css';
import MasterLayout from './Layout/MasterLayout';
import Routing from './routing/Routing';
import './Theme/Theme.css'
import { ThemeProvider } from '@mui/material';
import theme from './Theme/theme.js'


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Routing/>
    </ThemeProvider>
  );
}

export default App;
