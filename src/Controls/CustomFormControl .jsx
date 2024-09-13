import React from 'react'
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { styled } from '@mui/system';
const CustomFormControl = styled(FormControl)({
    '& fieldset': {
         display: "none !important",
        outline: '0px solid var(--ced-color-global-white) !important', // Focus outline
        border: "var(--ced-border-width) solid var(--ced-color-global-neutral-3)  !Important",
    },
    '& .MuiInputBase-formControl': {
        paddingLeft: "4px",
        paddingRight: "4px",
        "borderRadius": "var(--ced-border-radius-base)",
        "border": "var(--ced-border-width) solid var(--ced-color-global-neutral-3)",
        boxShadow: "0px 2px 1px rgba(33, 33, 33, 0.07) inset, 0px -2px 0px var(--ced-color-global-white) inset",
        '&.Mui-focused': {

            borderColor: '#000',            // Change border color when focused
            boxShadow: '0 0 0 4px rgba(0, 0, 0, 0.1)', // Optional: Add shadow on focus
            outline: '2px solid var(--ced-color-global-white) !important', // Focus outline
            boxShadow: '0px 0px 0px 4px var(--ced-color-global-brand-3) !important', // Focus shadow
            border: "var(--ced-border-width) solid var(--ced-color-global-neutral-3)  !Important",
        },

        // '& .selecterror:focus': {
        //     borderColor: 'red !important'

        // },
    //     '& .selecterror':{ 
    //     '& .Mui-focused': {
    //           borderColor: 'red !important'
    // }
    //         // boxShadow:"none !important",
    //         // outline: '2px solid red !important',
    //         // boxShadow: '0 0 0 4px red', // Optional: Add shadow on focus

    // //         border: none !important;
    // // border-radius: var(--ced-border-radius-base);
    // // outline: 2px solid var(--ced-color-global-brand-3) !important;
    //         // outline: '2px solid var(--ced-color-global-white) !important', // Focus outline
    //         // boxShadow: '0px 0px 0px 4px var(--ced-color-global-brand-3) !important', // Focus shadow
    //         // border: "var(--ced-border-width) solid var(--ced-color-global-neutral-3)  ",
    //     },
       
    },
    '&.selecterror .MuiOutlinedInput-root.Mui-focused': {
        borderColor: 'red !important',
      },
});

export default CustomFormControl 
