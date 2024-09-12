import React, { useState, useEffect } from 'react'
import { Typography, Box, TextField, FormControl, Select, MenuItem, Button, Hidden, styled } from '@mui/material';
import InventoryTable from '../Tables/InventoryTable';

import { fetchInventoryData } from '../../services/fetchInventoryData';
import AddInventoryModal from '../../Modals/AddInventoryModal';
import CustomTextField from '../../Controls/CustomTextField';
import CustomFormControl from '../../Controls/CustomFormControl ';
import CustomPrimaryButton from '../../Controls/CustomPrimaryButton';
import CustomSecondaryButton from '../../Controls/CustomSecondaryButton';


const IvMSettings = () => {
    const [tabledata, settabledata] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => {


        setOpenModal(true);
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0);
    };

    const handleClose = () => {
        setOpenModal(false);
        document.body.style.overflow = 'auto';
    };
    const parentStyle = {
        height: '100vh', // Full viewport height
        overflowY: 'auto', // Parent-level scroll

    };
    const fetchData = async () => {
        console.log("fetchindata.........")
        try {
            const response = await fetch('/data/inventory.json'); // Adjust the path as necessary
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);  // Debugging log
            settabledata(Array.isArray(data) ? data : []);

        } catch (error) {
            console.log("error :", error)
        } finally {
            console.log("completed")
        }


    };
    useEffect(() => {
        console.log('useEffect called');
        try {
            fetchData();//  fetchInventoryData();

        } catch (error) {
            console.error('Error loading data:', error);
        }
    }, []);



    return (
        <Box sx={{ overflow: 'hidden',p:1,height:"200vh" }}>
            <Typography variant="h4" component="h1" gutterBottom className='content-header-text'>
                Inventory Manager Settings
            </Typography>

            <Box
                sx={{


                }}
            >
                <Typography variant="body1" component="h2" className='sub-title'

                    sx={{}}
                >
                    Project Settings
                </Typography>

            </Box>
            {/* Bold Account Information */}
            <Typography
                variant="body1"
                sx={{ fontWeight: 'bold', marginTop: '20px' }}
            >
                Account: 78945 - ARCLIGHT TEST
            </Typography>

            {/* Multiline Text */}
            <Typography
                variant="body2"
                sx={{ marginTop: '10px', whiteSpace: 'pre-line' }}
            >
                This is a multiline text that provides more details about the current settings.
                You can add as many lines of text as necessary.
                Just ensure that the content is clear and informative.
            </Typography>

            {/* Bold Default Address Header */}
            <Typography
                variant="body1"
                sx={{ fontWeight: 'bold', marginTop: '20px' }}
            >
                Default Address
            </Typography>

            {/* Multiline Text for Default Address */}
            <Typography
                variant="body2"
                sx={{ marginTop: '10px', whiteSpace: 'pre-line' }}
            >
                1234 Elm Street
                Suite 5678
                Springfield, IL 62704
                United States
            </Typography>
            {/* Simple Textboxes Section with Labels */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
                {/* Label and Textbox 1 */}
                <Box>
                    <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                        Textbox 1 Label
                    </Typography>
                    <CustomTextField
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            // Disable the fieldset border
                            notched: false,
                            classes: { notchedOutline: 'no-border' },
                          }}
                    />
                </Box>

                {/* Label and Textbox 2 */}
                <Box>
                    <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                        Textbox 2 Label
                    </Typography>
                    <CustomTextField
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            // Disable the fieldset border
                            notched: false,
                            classes: { notchedOutline: 'no-border' },
                          }}
                    />
                </Box>

                {/* City, State, and Zip Controls */}
                <Box sx={{ display: 'flex', gap: '20px', marginTop: '0px' }}>
                    {/* City Textbox */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            City
                        </Typography>
                        <CustomTextField
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                // Disable the fieldset border
                                notched: false,
                                classes: { notchedOutline: 'no-border' },
                              }}
                        />
                    </Box>

                    {/* State Dropdown */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            State
                        </Typography>
                        <CustomFormControl fullWidth>
                            <Select variant="outlined" defaultValue="">
                                <MenuItem value="CA">California</MenuItem>
                                <MenuItem value="TX">Texas</MenuItem>
                                <MenuItem value="NY">New York</MenuItem>
                                {/* Add more states as needed */}
                            </Select>
                        </CustomFormControl>
                    </Box>

                    {/* Zip Textbox */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            Zip
                        </Typography>
                        <CustomTextField
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                // Disable the fieldset border
                                notched: false,
                                classes: { notchedOutline: 'no-border' },
                              }}
                        />
                    </Box>
                </Box>

            </Box>
            {/* Notification Emails Section */}
            <Box sx={{ marginTop: '40px' }}>
                {/* Bold Notification Emails Header */}
                <Typography
                    variant="body1"
                    sx={{ fontWeight: 'bold', marginBottom: '10px' }}
                >
                    Notification Emails
                </Typography>

                {/* Multiline Text */}
                <Typography variant="body2" sx={{ marginBottom: '20px', whiteSpace: 'pre-line' }}>
                    Here you can add the email addresses that should receive notifications about
                    changes, updates, and alerts related to your account and inventory.
                </Typography>

                {/* Simple Textbox for Email */}
                <CustomTextField
                    variant="outlined"
                    fullWidth
                    placeholder="Enter email address"
                    InputProps={{
                        // Disable the fieldset border
                        notched: false,
                        classes: { notchedOutline: 'no-border' },
                      }}
                    sx={{ marginBottom: '20px' }}
                />

                {/* Buttons */}
                <Box sx={{ display: 'flex', gap: '20px' }}>
                    {/* Save Changes Button */}
                    <CustomPrimaryButton
                        variant="contained"
                        color="primary"
                        sx={{ flex: 1 }}
                    >
                        Save Changes
                    </CustomPrimaryButton>

                    {/* Discard Changes Button */}
                    <CustomSecondaryButton
                        variant="outlined"
                        color="secondary"
                        sx={{ flex: 1, backgroundColor: '#fff', border: '1px solid #ccc' }}
                    >
                        Discard Changes
                    </CustomSecondaryButton>
                </Box>
            </Box>

            {/* Inventory Settings Section */}
            <Box sx={{ marginTop: '40px' }}>
                {/* Bold Inventory Settings Header with Left Border */}
                <Typography
                    variant="body1"
                    className='sub-title'
                >
                    Inventory Settings
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    {/* Multiline Text */}
                    <Typography variant="body2" sx={{ flex: 1, whiteSpace: 'pre-line' }}>
                        Configure your inventory settings here. You can set up various parameters
                        related to inventory management and track your stock levels.
                    </Typography>


                    {/* Add Inventory Button */}

                    {/* Add Inventory Button */}
                    <CustomPrimaryButton
                        variant="contained"
                        color="primary"
                        onClick={handleOpen}
                        sx={{
                            whiteSpace: 'nowrap',

                            alignSelf: 'flex-start' // Aligns button to the top
                        }}
                    >
                        Add Inventory
                    </CustomPrimaryButton>
                </Box>
            </Box>

            <InventoryTable rows={tabledata} />
            {/* Add Inventory Modal */}
            <AddInventoryModal open={openModal} handleClose={handleClose} />

        </Box>
    )
}

export default IvMSettings
