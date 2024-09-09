import React from 'react'
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { styled } from '@mui/system';
const CustomFormControl = styled(FormControl)({
    '& fieldset': {

        outline: '0px solid var(--ced-color-global-white) !important', // Focus outline
        border: "var(--ced-border-width) solid var(--ced-color-global-neutral-3)  !Important",
    },
    '& .MuiInputBase-formControl': {
        '&.Mui-focused': {

            borderColor: '#000',            // Change border color when focused
            boxShadow: '0 0 0 4px rgba(0, 0, 0, 0.1)', // Optional: Add shadow on focus
            outline: '2px solid var(--ced-color-global-white) !important', // Focus outline
            boxShadow: '0px 0px 0px 4px var(--ced-color-global-brand-3) !important', // Focus shadow
            border: "var(--ced-border-width) solid var(--ced-color-global-neutral-3)  !Important",
        },
    },
});

export default CustomFormControl 
