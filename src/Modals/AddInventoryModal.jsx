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
import { Bolt } from '@mui/icons-material';


const AddInventoryModal = ({ open, handleClose,handleSave }) => {
    const { theme } = useTheme();
    const [state, setState] = React.useState(''); // State dropdown value

    const handleStateChange = (event) => {
        setState(event.target.value);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        borderRadius: '8px',
        boxShadow: 24,
        p: 4,
        mt:"5%",
        mb:"15%"

    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="add-inventory-modal"
            aria-describedby="add-inventory-form"
            closeAfterTransition
            sx={{
                overflowY: 'auto', // Ensure the overlay (backdrop) is scrollable


            }}
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

                {/* Form Fields */}
                <Box display="flex" flexDirection="column" gap={1} sx={{ display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '20px' }}>
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
            </div>
        </Modal>
    );
};

export default AddInventoryModal;
