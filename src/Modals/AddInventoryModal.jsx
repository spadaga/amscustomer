import React from 'react';
import {
    Modal,
    Box,
    Typography,
   
    Button,
    IconButton,
    Divider,
    MenuItem,
    Select,
    FormControl,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomTextField from '../Controls/CustomTextField';
import CustomFormControl from '../Controls/CustomFormControl ';
import CustomPrimaryButton from '../Controls/CustomPrimaryButton';
import CustomSecondaryButton from '../Controls/CustomSecondaryButton';
import { useTheme } from '../Theme/CustomThemeProvider';
import { Bolt, Padding } from '@mui/icons-material';


const AddInventoryModal = ({ open, handleClose,handleSave }) => {
    const { theme } = useTheme();
    const [state, setState] = React.useState(''); // State dropdown value

    const handleStateChange = (event) => {
        setState(event.target.value);
    };

    const style = {
        position: 'absolute',
        top: '0%', // Padding from the top
        left: '50%',
        transform: 'translate(-50%, 0)', // Keep horizontal centering but not vertical transformation
        width: 600,
        maxHeight: '90vh', // Prevent modal from exceeding viewport height
        bgcolor: 'background.paper',
        borderRadius: '8px',
        boxShadow: 24,
        overflow: 'hidden', // Allow the modal itself to be scrollable
        p: 3,
        mt: "1%", // Margin at the top
        mb: "2%", // Margin at the bottom


    };

    const scrollbarStyles = {
       
        '&::-webkit-scrollbar': {
            width: '12px',
        },
        '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '10px',
            border: '3px solid #f1f1f1',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
        },
        overflowY: 'auto',
        maxHeight: '70vh', // Adjust the height of the scrollable area
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="add-inventory-modal"
            aria-describedby="add-inventory-form"
            closeAfterTransition
           
        >
             <div className={`${theme}`} > 
            <Box sx={style}>
                {/* Header */}
                <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="body1" className='modalheader' sx={{fontWeight:"bold"}} component="h4">Add Inventory</Typography>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Divider */}
                <Divider sx={{ my: 2 }} />
                <Box sx={scrollbarStyles} >
                {/* Form Fields */}
                <Box display="flex" flexDirection="column" gap={1} sx={{padding:"0px 24px", display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '20px' }}>
                    {/* Description */}
                    <Box sx={{m:0}}>
                        <Typography variant="body1" >
                            Description
                        </Typography>
                        <CustomTextField variant="outlined" fullWidth margin="normal"

                            sx={{
                                marginTop: 0, // Remove gap between label and textbox

                            }}
                        />
                    </Box>


                    {/* Address Line 1 and 2 */}
                    <Box sx={{m:0,gap:0}}>
                        <Typography variant="body1" >
                            Address Line 1
                        </Typography>
                        <CustomTextField variant="outlined" fullWidth margin="normal"

                            sx={{
                                marginTop: 0, // Remove gap between label and textbox

                            }}
                        />
                    </Box>

                    <Box>
                        <Typography variant="body1" >
                            Address Line 2
                        </Typography>
                        <CustomTextField variant="outlined" fullWidth margin="normal"

                            sx={{
                                marginTop: 0, // Remove gap between label and textbox

                            }}
                        />
                    </Box>



                     {/* City, State, and Zip Controls */}
                <Box sx={{ display: 'flex', gap: '20px', marginTop: '0px' }}>
                    {/* City Textbox */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ marginBottom: '0px' }}>
                            City
                        </Typography>
                        <CustomTextField
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{ shrink: false }}  // No floating label
                        />
                    </Box>

                    {/* State Dropdown */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ marginBottom: '0px' }}>
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
                        <Typography variant="body1" sx={{ marginBottom: '0px' }}>
                            Zip
                        </Typography>
                        <CustomTextField
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{ shrink: false }}  // No floating label
                        />
                    </Box>
                </Box>

                    {/* Notification Textbox with Multiline Information */}
                    <Typography variant="subtitle2" color="textSecondary" sx={{mt:2,mb:1}}>
                        Please provide a notification email address where notifications
                        will be sent.
                    </Typography>
                    <CustomTextField label="" variant="outlined" fullWidth  InputLabelProps={{ shrink: false }}/>

                    {/* Underline */}
                    <Divider sx={{ my: 2 }} />

                    {/* Save and Cancel Buttons */}
                    <Box display="flex" gap={2}>
                        <CustomPrimaryButton variant="contained" color="primary" onClick={handleSave}>
                            Save
                        </CustomPrimaryButton>
                        <CustomSecondaryButton variant="outlined" onClick={handleClose}>
                            Cancel
                        </CustomSecondaryButton>
                    </Box>
                </Box>
                </Box>
            </Box>
            </div>
        </Modal>
    );
};

export default AddInventoryModal;
