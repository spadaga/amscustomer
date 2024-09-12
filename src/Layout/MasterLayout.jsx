import React from 'react'
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


const MasterLayout = () => {
    const { theme } = useTheme();
    return (
        // <ThemeProvider theme={theme}>
         <div className={`${theme}`} > 
            <Box  sx={{height:"100vh", overflow:"scroll" }}>
            <Headercomponent />
            <TabComponent/></Box>
           </div> 
        // </ThemeProvider>
    )
}

export default MasterLayout
