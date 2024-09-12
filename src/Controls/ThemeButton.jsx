import React from 'react'
import { Button } from '@mui/material';
import { styled } from '@mui/system';
const ThemeButton = styled(Button)(({ theme }) => ({
    // Default button styles
    "padding": "var(--ced-spacing-small) !important",
    "boxSizing": "border-box",
    "textAlign": "center !important",
    "letterSpacing": "0.3px",
    "borderRadius": ".375rem !important",   
    "boxShadow": "var(--ced-shadow-button-primary)",
    "backgroundColor": "var(--ced-color-global-brand-2) !important ",
    "color": "var(--ced-color-text-inverse)) !important",
    "fontWeight": "var(--ced-font-weight-semi-bold) !important",
    "fontSize": "var(--ced-font-size-small) !important",
    "lineHeight": "var(--ced-line-height-component-base) !important",
    "border": "var(--ced-border-width) solid var(--ced-color-border-neutral-dark) !important",
    "justifyContent": "center",
    "transition": "background var(--ced-transition-hover) !important",
    "cursor": "pointer !important",
    '&:hover': {
        "backgroundColor": "var(--ced-color-background-brand-hover) !important",
        "border": "var(--ced-border-width) solid var(--ced-color-border-neutral-dark) !important",
        "color": "var(--ced-color-text-inverse)) !important"
    },
    // Focus styles
    '&:focus': {
        "outline": "2px solid var(--ced-color-global-white) !important",
        "boxShadow": "0px 0px 0px 4px var(--ced-color-global-brand-3)"
    },
}));

export default ThemeButton