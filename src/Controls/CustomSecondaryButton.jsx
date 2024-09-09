import React from 'react'
import { Button } from '@mui/material';
import { styled } from '@mui/system';
const CustomSecondaryButton = styled(Button)(({ theme }) => ({
    // Default button styles
    "padding": "var(--ced-spacing-small) !important",
    "boxSizing": "border-box",
    "textAlign": "center !important",
    "letterSpacing": "0.3px",
    "borderRadius": "var(--ced-border-radius-base) !important",
    "boxShadow": "var(--ced-shadow-button-neutral)",
    "backgroundColor": "var(--ced-color-global-neutral-6) !important",
    "color": "var(--ced-color-global-neutral-1) !important",
    "fontWeight": "var(--ced-font-weight-semi-bold) !important",
    "fontSize": "var(--ced-font-size-small) !important",
    "lineHeight": "var(--ced-line-height-component-base) !important",
    "border": "var(--ced-border-width) solid var(--ced-color-border-neutral-dark) !important",
    "justifyContent": "center",
    "transition": "background var(--ced-transition-hover) !important",
    "cursor": "pointer !important",
    '&:hover': {
        "backgroundColor": "var(--ced-color-global-neutral-5) !important",
        "border": "var(--ced-border-width) solid var(--ced-color-border-neutral-dark) !important",
        "color": "var(--ced-color-global-neutral-1) !important"
    },
    // Focus styles
    '&:focus': {
        "outline": "2px solid var(--ced-color-global-white) !important",
        "boxShadow": "0px 0px 0px 4px var(--ced-color-global-brand-3)"
    },
}));

export default CustomSecondaryButton
