import logo from './logo.svg';
import './App.css';
import MasterLayout from './Layout/MasterLayout';
import Routing from './routing/Routing';
import './Theme/Theme.css'
import { ThemeProvider } from '@mui/material';
import theme from './Theme/theme.js'
import { SnackbarProvider } from './toast/SnackbarProvider.js';
import ProgressBar from './Loader/ProgressBar.jsx';
import React, { useState, useEffect } from 'react';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (like data fetching or page load)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after the simulated delay
    }, 3000); // Simulate a 3-second load time

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);



  return (

    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <>
          {loading ? (
            <ProgressBar /> // Show the ProgressBar when loading is true
          ) : (
            <Routing />
          )}
          </>
        </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
