import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Divider, Box, Typography, TableContainer, Table, TableHead, TableRow, Paper, TableBody } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomPrimaryButton from '../Controls/CustomPrimaryButton';
import CustomSecondaryButton from '../Controls/CustomSecondaryButton';
import { useTheme } from '../Theme/CustomThemeProvider';
import Cyclecount_ProductsTable from '../components/Tables/Cyclecount_ProductsTable';
import {
   
   
    Checkbox,
    TableCell,
    styled,
 
    Tooltip,
} from '@mui/material';
const CyclecountModal = ({ open, handleClose }) => {
    const { theme } = useTheme();
    const [tabledata, settabledata] = useState([]);
    const [movedRows, setMovedRows] = useState([]); // Moved rows state
    const fetchJsonTableData = async () => {
        try {
            const response = await fetch(`${process.env.PUBLIC_URL}/data/cyclecountproducts.json`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            console.log(data);  // Debugging log
            settabledata(data);
        } catch (error) {
            console.error('Error fetching the JSON:', error);
        }
    };
    useEffect(() => {


        fetchJsonTableData();


    }, []);

    const handleAddRows = (selectedRows) => {
        // Add selected rows to movedRows
        setMovedRows(prevMovedRows => [...prevMovedRows, ...selectedRows]);
    };
    const handleCloseModal = () => {
        setMovedRows([]); // Clear right table
        handleClose(); // Close the modal
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
        maxHeight: '95vh', // Adjust the height of the scrollable area
    };
    const scrollbarStyles1 = {
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
        maxHeight: '400px', flex: 1,
    };


    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth={true}
            PaperProps={{
                style: {
                    width: '80%',
                    maxWidth: 'none',
                    backgroundColor: 'white',
                    boxShadow: 'none',
                    borderRadius: '8px',
                    maxHeight: '95vh', // Ensures the modal doesn't exceed viewport height
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'auto', // Allow the modal itself to be scrollable
                },
            }}
            BackdropProps={{
                style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
            }}
        >
            <div className={`${theme}`}>
                <Box sx={scrollbarStyles}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2 }}>
                        <Typography variant="h6" className="modalheader">Cycle Count - Inventory Name</Typography>
                        <IconButton edge="end" onClick={handleCloseModal}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Divider />
                    {/* Make DialogContent scrollable if content overflows */}

                    <DialogContent
                        sx={{
                            overflowY: 'auto',
                            flexGrow: 1,  // Allows the content to grow within modal height
                            padding: 2,
                        }}
                    >

                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>

                            {/* First Column: Product Table */}

                            <Box sx={scrollbarStyles1}>

                                <Cyclecount_ProductsTable 
                                 rows={tabledata || []} 
                                 movedRows={movedRows}
                                 onAddToCount={handleAddRows}
                                    />

                            </Box>

                            {/* Second Column: Placeholder for other content */}
                            <Box sx={{ flex: 1 }}>
                                {/* Right side - Static table */}
                                <Box sx={scrollbarStyles1}>
                                    <Typography variant="h6">Counted Products</Typography>
                                    <Typography variant="body2" sx={{ mb: 2 }}>
                                    Total Counted Products: {movedRows.length}
                                </Typography>
                                    <TableContainer component={Paper} style={{ overflowX: 'hidden' }}>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Product</TableCell>
                                                    <TableCell>Location</TableCell>
                                                    <TableCell>Quantity</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {movedRows.length > 0 ? (
                                                    movedRows.map((row) => (
                                                        <TableRow key={row.product}>
                                                            <TableCell>{row.product}</TableCell>
                                                            <TableCell>{row.location}</TableCell>
                                                            <TableCell>{row.quantity}</TableCell>
                                                        </TableRow>
                                                    ))
                                                ) : (
                                                    <TableRow>
                                                        <TableCell colSpan={3} align="center">
                                                            No products counted.
                                                        </TableCell>
                                                    </TableRow>
                                                )}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Box>
                        </Box>
                    </DialogContent>
                    <Divider />
                    {/* Move actions inside the modal's scrollable area */}
                    <DialogActions sx={{ justifyContent: 'flex-start', padding: 2 }}>
                        <CustomPrimaryButton onClick={handleCloseModal} color="primary" variant="contained" sx={{ marginRight: 1 }}>
                            Submit
                        </CustomPrimaryButton>
                        <CustomSecondaryButton onClick={handleCloseModal} color="secondary">
                            Cancel
                        </CustomSecondaryButton>
                    </DialogActions>
                </Box>   </div>
        </Dialog>

    );
};

export default CyclecountModal;
