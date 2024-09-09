import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'

import CancelIcon from '@mui/icons-material/Cancel';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const TableSearchBox = ({ value, onChange, onClear }) => {
    return (
        <Box
            sx={{
                "backgroundColor": "var(--ced-color-global-neutral-6)",
                "borderRadius": "var(--ced-border-radius-large)",
                "alignItems": "center",
                "border": "var(--ced-border-width) solid var(--ced-color-global-neutral-4)",
                marginTop:"16px"
            }}
        >


            <TextField

                value={value}
                onChange={onChange}
                placeholder="Search for Inventory"
                fullWidth

 className="search-box"
               
                InputProps={{
                    // Disable the fieldset border
                    notched: false,
                    // classes: { notchedOutline: 'no-border' },
                    startAdornment: (
                        <InputAdornment position="middle" sx={{ color:"var(--ced-color-global-neutral-3);", fontSize:"1.5rem" ,position:"absolute",p:"20px" }}>
                            <SearchOutlinedIcon />
                        </InputAdornment>
                    ),
                    endAdornment: value && (
                        <InputAdornment position="end"


                        >
                            <IconButton onClick={onClear} sx={{ color:"var(--ced-color-global-neutral-3);", fontSize:"1.5rem" ,position:"absolute",ml:"-44px" }}>
                                <CancelIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    )
}

export default TableSearchBox
