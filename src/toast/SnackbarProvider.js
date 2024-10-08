import React, { createContext, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

// Create and export the SnackbarContext
export const SnackbarContext = createContext();

// Define the SnackbarProvider component
export const SnackbarProvider = ({ children }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('error'); // Error by default

  const showSnackbar = (message, severity = 'error') => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={snackbarOpen}
        sx={{
          width: '400px',   // Custom width
         
          '& .MuiSnackbarContent-root': {
            height: '280px',  // Custom height for the Snackbar content
            
          },
          '&.MuiSnackbar-root' :
          {

            top:"0px"
          }
        }}
        autoHideDuration={4000}
        onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}  
      >
        <Alert onClose={handleClose}  sx={{ width: '100%' }} variant="filled" severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
