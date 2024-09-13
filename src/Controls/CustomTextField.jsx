import { styled, TextField } from '@mui/material';
import React from 'react'


// Custom styled TextField component
const CustomTextField = styled(TextField)({

    '& fieldset': {
        display: 'none', // This hides the default fieldset
    },
    '& .MuiInputBase-input': {
        paddingLeft: "4px",
        paddingRight: "4px",
        "borderRadius": "var(--ced-border-radius-base)",
        "border": "var(--ced-border-width) solid var(--ced-color-global-neutral-3)",
        boxShadow: "0px 2px 1px rgba(33, 33, 33, 0.07) inset, 0px -2px 0px var(--ced-color-global-white) inset",

        '&:focus-visible': {
            outline: '2px solid var(--ced-color-global-white) !important', // Focus outline
            boxShadow: '0px 0px 0px 4px var(--ced-color-global-brand-3) !important', // Focus shadow
            border: "var(--ced-border-width) solid var(--ced-color-global-neutral-3)  ",
        },
    },


});

export default CustomTextField
