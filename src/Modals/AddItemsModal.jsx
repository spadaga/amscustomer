import React, { useState } from 'react';
import { Modal, Box, Typography, Button, IconButton, Divider, Tabs, Tab } from '@mui/material';
import { useTheme } from '../Theme/CustomThemeProvider';

import CloseIcon from '@mui/icons-material/Close';
import AddItemsInvTabComponent from '../Tabs/AddItemsInvTabComponent';
import CustomPrimaryButton from '../Controls/CustomPrimaryButton';
import CustomSecondaryButton from '../Controls/CustomSecondaryButton';


const AddItemsModal = ({ open, handleClose }) => {

    const { theme } = useTheme();
    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const style = {
        position: 'absolute',
        top: '0%', // Padding from the top
        left: '50%',
        transform: 'translate(-50%, 0)', // Keep horizontal centering but not vertical transformation
        width: '90%', // Set width to 80% of the parent
        maxHeight: '90vh', // Prevent modal from exceeding viewport height
        bgcolor: 'background.paper',
        borderRadius: '8px',
        boxShadow: 24,
        overflow: 'auto', // Allow the modal itself to be scrollable
        p: 4,
        mt: "1%", // Margin at the top
        mb: "2%", // Margin at the bottom

    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="add-items-modal-title"
            aria-describedby="add-items-modal-description"
        >
            <> <div className={`${theme}`} >

                <Box
                    sx={style}
                >
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="body1" className='modalheader' sx={{ fontWeight: "bold" }} component="h4">Add Items</Typography>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    {/* Divider */}
                    <Divider sx={{ my: 2 }} />

                    <Box>
                        <AddItemsInvTabComponent />



                    </Box>

                    {/* Divider below the table */}
                    <Divider sx={{ my: 2 }} />

                    {/* Buttons container */}
                    <Box display="flex" justifyContent="flex-start" gap={2} mt={2}>
                        <CustomPrimaryButton variant="contained" color="primary" onClick={() => console.log("Transfer Items clicked")}>
                            Transfer Items
                        </CustomPrimaryButton>
                        <CustomSecondaryButton variant="outlined" onClick={handleClose}>
                            Cancel
                        </CustomSecondaryButton>
                    </Box>
                </Box>

            </div>

            </>

        </Modal>
    );
};

export default AddItemsModal;
