
import React, { useState, useEffect } from 'react';
import CustomPrimaryButton from '../Controls/CustomPrimaryButton'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import CustomAutocomplete from '../Controls/CustomAutocomplete';
import TransferItemsTable from '../components/Tables/TransferItemsTable';

const TransferItemsTabContent = () => {
    const [jsonData, setJsonData] = useState([]);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isExpanded, setIsExpanded] = React.useState(false);
    const [tabledata, settabledata] = useState([]);


    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
        setIsExpanded((prev) => !prev);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setIsExpanded(false);
    };

    const fetchJsonData = async () => {
        try {
            const response = await fetch(`${process.env.PUBLIC_URL}/data/AllInventorys.json`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setJsonData(data);
        } catch (error) {
            console.error('Error fetching the JSON:', error);
        }
    };

    const fetchJsonTableData = async () => {
        try {
          const response = await fetch(`${process.env.PUBLIC_URL}/data/TransferItems.json`);
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

        fetchJsonData();
        fetchJsonTableData();


    }, []);
    return (
        <>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

                <label>Transfer From:</label>

                <CustomAutocomplete data={jsonData} />



            </Box>


            {/* Right side: Upload Button with Chevron */}
            <Box>

                <CustomPrimaryButton
                    variant="contained"
                    onClick={handleMenuClick}
                    endIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                >
                    Upload
                </CustomPrimaryButton>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
                </Menu>
            </Box>
            
        </Box>
        
        <Box>

                <TransferItemsTable  rows={tabledata || []} />
            </Box>
        </>
    )
}

export default TransferItemsTabContent
