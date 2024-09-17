import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import CustomAutocomplete from '../../Controls/CustomAutocomplete';
import CustomPrimaryButton from '../../Controls/CustomPrimaryButton';
import ViewInventoryTable from '../Tables/ViewInventoryTable';
import AddItemsModal from '../../Modals/AddItemsModal';

const ViewInventory = () => {
  const [jsonData, setJsonData] = useState([]);
  const [tabledata, settabledata] = useState([]);
  const [open, setOpen] = useState(false);

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
      const response = await fetch(`${process.env.PUBLIC_URL}/data/inventoryData.json`);
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


  const openAddItemsModal=()=>
  {

    setOpen(true);
  }


  const handleCloseModal = () => setOpen(false);

  useEffect(() => {
    
    fetchJsonData();
    fetchJsonTableData();
    
  }, []);

  return (
    <Box sx={{ overflow: 'hidden', p: 1 }}>
       <Typography variant="h4" component="h1" gutterBottom className='content-header-text'>
        View Inventory
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:"flex-start" , gap: '16px' }}>
      <Typography variant="body1" component="h2" className='sub-title'>
          Inventory
        </Typography>

        <CustomAutocomplete data={jsonData} />
        <Box sx={{ flexGrow: 1 }} /> {/* Spacer to push button to the right */}
        
        <CustomPrimaryButton onClick={openAddItemsModal}>
          Add Items
        </CustomPrimaryButton>
     
      </Box>

      <Box sx={{ mt: 2 }}>
        <ViewInventoryTable  rows={tabledata || []} />
      </Box>
      <AddItemsModal open={open} handleClose={handleCloseModal}></AddItemsModal>
    </Box>



  );
};

export default ViewInventory;
