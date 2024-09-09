import { IconButton, Typography } from '@mui/material'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/system';
// Define the StyledLabel component
const StyledLabel = styled(Typography)(({ theme }) => ({
    textDecoration: 'underline',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    color: 'var(--ced-color-text-brand) !important',
    fontWeight: "var(--ced-font-weight-normal)",
    "fontSize": "var(--ced-font-size-small)",
    "letterSpacing": "0.12px",
    "lineHeight": "1.25",
    "position": "relative",
    "cursor": "pointer",
    "textDecoration": "none",


    "borderBottom": "solid",
    "borderBottomColor": "var(--ced-color-global-brand-3)",
    "borderBottomWidth": "2px",
    '& .MuiIconButton-root':
    {
        color: 'var(--ced-color-text-brand) !important',
        "fontSize": "var(--ced-font-size-small) !important",
    },

    '&:hover': {
        backgroundColor: theme?.palette?.action?.hover || '#f5f5f5',  // Fallback to light gray if theme not available
        textDecoration: 'underline solid 2px',
        "textDecoration": "none",
        "textDecorationSkipInk": "auto",
        "textDecorationThickness": "var(--ced-text-link-underline-size)",
        "textUnderlineOffset": "var(--ced-text-link-underline-size)",
        "outlineColor": "var(--ced-color-focus-indicator)",
        "outlineWidth": "var(--ced-text-focus-indicator-size)",
        "outlineOffset": "var(--ced-text-focus-indicator-size)",
        "backgroundColor": "var(--ced-color-global-alpha-neutral-4) !important",
        "borderBottom": "solid",
        "borderBottomColor": "var(--ced-color-global-brand-3)",
        "borderBottomWidth": "4px"
    },
}));
const Help = () => {
    return (
        <>
            <StyledLabel variant="body1">
                <IconButton size="small">
                    <InfoIcon fontSize="16px" />
                </IconButton>
                AMS HELP

            </StyledLabel>
        </>
    )
}

export default Help
