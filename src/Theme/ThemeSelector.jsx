import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './CustomThemeProvider';
import ThemeButton from '../Controls/ThemeButton';
import { Box, Typography } from '@mui/material';

// import { useTheme } from './ThemeContext'; // Import the theme context

const ThemeSelector = () => {
  const { changeTheme } = useTheme();
  const navigate = useNavigate();

  const handleThemeChange = (theme) => {
    localStorage.setItem('appTheme', theme);
    changeTheme(theme); // Update the theme in the context
    navigate('/settings'); // Navigate to the home page
  };

  return (
    <Box className="container">
      
      <Typography variant="h6" className="header">Select a Theme</Typography>
      <Box  className="button-group">
      <ThemeButton variant="contained" className="isn button" onClick={() => handleThemeChange('isn')}>ISN</ThemeButton>
      <ThemeButton variant="contained" className="greentech button" onClick={() => handleThemeChange('greentech')}>Green Tech</ThemeButton>
      <ThemeButton variant="contained" className="allphase button" onClick={() => handleThemeChange('allphase')}>All Phase</ThemeButton>
    </Box>
    </Box>
  );
};

export default ThemeSelector;
