import React from 'react'
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const CustomPrimaryButton = styled(Button)(({ theme }) => ({
   "position": "relative",
  
  "boxSizing": "border-box",
  "textAlign": "center !important",
  "letterSpacing": "0.3px !important",
  "borderRadius": "var(--ced-border-radius-base) !important",
  "boxShadow": "var(--ced-shadow-button-primary) !important",
  "backgroundColor": "var(--ced-color-global-brand-2) !important",
  "color": "var(--ced-color-text-inverse) !important",
  "fontWeight": "var(--ced-font-weight-semi-bold) !important",
  "fontSize": "var(--ced-font-size-small) !important",

  "transition": "background var(--ced-transition-hover) !important",
  "cursor": "pointer !important",
  "marginRight": "8px !important",
    '&:hover': {
        "backgroundColor": "var(--ced-color-background-brand-hover) !important"
    },
    // Focus styles
    '&:focus': {
       "backgroundColor":"var(--ced-color-background-brand) !important","outline":"2px solid var(--ced-color-global-white) !important","boxShadow":"0px 0px 0px 4px var(--ced-color-global-brand-3) !important"
    },
}));

export default CustomPrimaryButton
