import React, { useState, useEffect } from 'react'

import { Autocomplete, TextField, InputBase } from '@mui/material';

import { styled } from '@mui/system';
import { Opacity } from '@mui/icons-material';

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input::placeholder': {
   color: "black", // Placeholder text color
    fontSize: "14px", // Font size
    fontWeight: "var(--ced-font-weight-semi-bold)",

    letterSpacing: "0.5px", // Letter spacing
    fontFamily: "Open Sans, sans-serif",

    opacity: 1, // Ensure the placeholder text is fully opaque
    // To override any potential overlay or browser defaults
    background: "none", // Remove any background overlay
  },
  '& .MuiOutlinedInput-root': {
    height: '45px',
    paddingRight: '10px',
    borderRadius: "var(--ced-border-radius-base)",
    borderColor: "#bbb",
    boxShadow: "0px 2px 1px rgba(33, 33, 33, 0.07) inset, 0px -2px 0px var(--ced-color-global-white) inset",

    '&.Mui-focused': {
      borderColor: 'gray', // Default border color
    },
    '&:hover': {
      borderColor: 'inherit',
    },
    '&:hover fieldset': {
      borderColor: 'none', // Border color on hover
    },
    '&.Mui-focused': {
      transform: 'none',
      color: 'green', // Label color when focused
      letterSpacing: ".2px",
      fontFamily: "Open Sans, sans-serif",
      fontWeight: "100",

      color: "var(--ced-color-global-neutral-1)",
      fontWeight: "var(--ced-font-weight-semi-bold)",
      fontSize: "var(--ced-font-size-small)",
    },
    '&.Mui-focused fieldset': {
      borderRadius: "var(--ced-border-radius-base)",
      border: "1px solid #bbb",


    },
    '&:active': {
      outline: '2px solid var(--ced-color-global-white)', // Apply the border color
      boxShadow: '0px 0px 0px 4px var(--ced-color-global-brand-3)', // Apply the box-shadow with a gap
    },
  },
  '& .MuiInputBase-input': {
    height: '45px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'inherit',
  },
}));

const CustomAutocomplete = styled(Autocomplete)({
  '& .MuiAutocomplete-input': {

    padding: '0 14px',
  },
  '& .MuiAutocomplete-popupIndicator': {
    height: '45px',
  },
  '& .MuiInputBase-root': {
    '&:active': {
      outline: '2px solid var(--ced-color-global-white)', // Custom outline for active state
      boxShadow: '0px 0px 0px 4px var(--ced-color-global-brand-3)', // Custom box shadow with gap
    },
  },
});

const ProjectsAutocomplete = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch(`${process.env.PUBLIC_URL}/data/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching the JSON data:', error));
  }, []);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <CustomAutocomplete
        options={projects}
        getOptionLabel={(option) => option.name}
        sx={{
          width: 350, marginRight: 2, '.MuiAutocomplete-input': {
            height: '12px', // Adjust height of the input field
            padding: '0 14px', // Adjust padding as needed

          },
          '.MuiAutocomplete-popupIndicator': {
            height: '12px', // Ensure the popup indicator matches the height
          },
        }}

        renderInput={(params) => (
          <CustomTextField {...params}
            placeholder={!isFocused ? "Select Project" : ""}

            sx={{
              "& fieldset": {
                display: isFocused ? "none" : "block",
              },
              "& .MuiInputBase-root": {
                padding: "10px 14px", // Adjust padding for centering
              },
            }}
            variant="outlined"



          />
        )}
      />
    </>
  )
}

export default ProjectsAutocomplete
