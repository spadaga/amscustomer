import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import CustomAutocomplete from '../../Controls/CustomAutocomplete';
import CustomPrimaryButton from '../../Controls/CustomPrimaryButton';
import CyclecountModal from '../../Modals/CyclecountModal';

const CycleCount = () => {
  const [jsonData, setJsonData] = useState([]);
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
  useEffect(() => {
    
    fetchJsonData();
   
    
  }, []);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ overflow: 'hidden', p: 1 }}>
    <Typography variant="h4" component="h1" gutterBottom className='content-header-text'>
     Cycle Count
   </Typography>
   <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:"flex-start" , gap: '16px' ,marginTop: 4}}>

   <Typography variant="body1" component="h2" className='sub-title'>
          Inventory
        </Typography>
        <CustomAutocomplete data={jsonData} />

     

   </Box>
<Box>
<Box sx={{ padding: 2,marginTop: 2 }}>
      {/* First block of multiline text */}
      <Typography variant="body1" paragraph>
        This is the first block of multiline text. 
        It consists of multiple lines to demonstrate how 
        we can easily manage formatting and spacing 
        using Material UI components. 
        You can add more lines as needed. 
      </Typography>

      {/* Space between the two text blocks */}
      <Box sx={{ marginBottom: 2 }} />

      {/* Second block of multiline text */}
      <Typography variant="body1" paragraph>
        <strong>Note : </strong>This is the second block of multiline text. 
        Here we are again showcasing the flexibility 
        of the Typography component for creating 
        multiline content. 
        Each block can have its own styles and spacing. 
        Feel free to customize as per your requirements.
      </Typography>
    </Box>

    <CustomPrimaryButton  onClick={handleClickOpen}>Start Cycle Count</CustomPrimaryButton>

    {/* Custom Modal */}
    <CyclecountModal open={open} handleClose={handleClose} />
</Box>
   
 
   </Box>
  )
}

export default CycleCount
