import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Autocomplete component
const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    height: '45px', // Set the custom height for the input
    borderRadius: 'var(--ced-border-radius-base)', // Border radius
    transition: 'box-shadow 0.3s ease, outline 0.3s ease', // Smooth transition
    boxShadow: '0px 2px 1px rgba(33, 33, 33, 0.07) inset, 0px -2px 0px var(--ced-color-global-white) inset',
    outline: '2px solid var(--ced-color-global-white)', // Default border color
    '&:hover': {
      boxShadow: 'none', // Remove box-shadow on hover
      outline: '2px solid var(--ced-color-global-white)', // Maintain border color on hover
    },
    '&.Mui-focused': {
      boxShadow: '0px 0px 0px 4px var(--ced-color-global-brand-3)', // Apply box-shadow with a gap when focused
      outline: '2px solid var(--ced-color-global-white)', // Apply the border color when focused
    },
    '&.Mui-focused fieldset': {
        borderRadius: "var(--ced-border-radius-base)",
        border: "1px solid #bbb",
    },

  },
  '& .MuiInputBase-input': {
    padding: '10px 14px', // Adjust padding for centering
  },
}));

const CustomAutocomplete = ({ data }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledAutocomplete
      options={data} // Pass the options from the parent JSON object
      getOptionLabel={(option) => option.label} // Use the 'label' property for display
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={isFocused ? "" : "Select Inventory"}
          variant="outlined"
         
        />
      )}
      sx={{ width: 300 }} // Set a custom width for the Autocomplete
    />
  );
};

export default CustomAutocomplete;
