import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Headercomponent from '../components/Headercomponent'
import { ThemeProvider } from '@emotion/react'
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight
import "@fontsource/inter/400-italic.css"; // Specify weight and style
import theme from '../assets/theme'

// import '../assets/root.css';

import '../Theme/Theme.css'
import '../assets/ams.css';
import TabComponent from '../components/TabComponent';
import { Height, VoiceOverOffOutlined } from '@mui/icons-material';
import { Box, height } from '@mui/system';
import { useTheme } from '../Theme/CustomThemeProvider';
import { SnackbarProvider } from '../toast/SnackbarProvider';
import ProgressBar from '../Loader/ProgressBar';


const MasterLayout = () => {
    const { theme } = useTheme();

    const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true); // Start loading on route change

    // Simulate a loading delay for demonstration; replace this with actual async calls
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after delay or data fetching
    }, 1000); // Adjust time as per your actual navigation/loading time

    return () => clearTimeout(timer); // Cleanup the timeout
  }, [location]);



    return (
        // <ThemeProvider theme={theme}>
        <div className={`${theme}`} >
            <Box sx={{ height: "100vh", overflow: "scroll" }}>
            {isLoading && <ProgressBar />} {/* Show ProgressBar while loading */}

                    <Headercomponent />
                    <TabComponent />
                
            </Box>
        </div>
        // </ThemeProvider>
    )
}

export default MasterLayout
