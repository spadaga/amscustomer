import React from 'react'
import Headercomponent from '../components/Headercomponent'
import { ThemeProvider } from '@emotion/react'
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight
import "@fontsource/inter/400-italic.css"; // Specify weight and style
import theme from '../assets/theme'

import '../assets/root.css';
import '../assets/ams.css';
import TabComponent from '../components/TabComponent';
import { Height, VoiceOverOffOutlined } from '@mui/icons-material';
import { Box, height } from '@mui/system';

const MasterLayout = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{height:"100vh", overflow:"scroll" }}>
            <Headercomponent />
            <TabComponent/></Box>
        </ThemeProvider>
    )
}

export default MasterLayout
