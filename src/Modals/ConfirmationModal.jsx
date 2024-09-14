// ConfirmationModal.js
import React from 'react';
import { Modal, Box, Typography, Button, Divider } from '@mui/material';
import CustomPrimaryButton from '../Controls/CustomPrimaryButton';
import CustomSecondaryButton from '../Controls/CustomSecondaryButton';
import { useTheme } from '../Theme/CustomThemeProvider';

const ConfirmationModal = ({ confirmopen, handleConfirmClose, handleConfirm }) => {
    const { theme } = useTheme();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={confirmopen}
      onClose={handleConfirmClose}
      aria-labelledby="confirmation-modal"
      aria-describedby="confirmation-message"
      closeAfterTransition
    >
         <div className={`${theme}`} > 
      <Box sx={style}>
        {/* Confirmation Header */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Warning
        </Typography>
        <Divider sx={{ my: 2 }} />
        {/* Confirmation Message */}
        <Typography variant="body1" sx={{ mt: 2 }}>
          Are you sure you want to cancel the changes?
        </Typography>

        {/* Underline */}
        <Divider sx={{ my: 2 }} />

        {/* Confirmation Buttons */}
        <Box display="flex" gap={2} justifyContent="flex-end">
          <CustomPrimaryButton variant="contained" color="primary" onClick={handleConfirm}>
            OK
          </CustomPrimaryButton>
          <CustomSecondaryButton variant="outlined" onClick={handleConfirmClose}>
            Cancel
          </CustomSecondaryButton>
        </Box>
      </Box></div>
    </Modal>
  );
};

export default ConfirmationModal;
