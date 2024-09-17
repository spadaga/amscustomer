// src/Components/TableSortHeader.js
import React from 'react';
import { TableCell, TableSortLabel } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const TableSortHeader = ({ orderBy, order, handleSortRequest, label,disableSorting }) => {
    if (disableSorting) {
        return <TableSortLabel className='emptycell' style={{ padding: '0px !important',margin:"0px !important" }}>{label}</TableSortLabel>;
    } 
    return (
        
            <TableSortLabel
                active={orderBy === label.toLowerCase()}
                direction={orderBy === label.toLowerCase() ? order : 'asc'}
                onClick={() => handleSortRequest(label.toLowerCase())}
                IconComponent={() => {
                    if (orderBy === label.toLowerCase()) {
                        return order === 'asc' ? <NorthIcon sx={{ fontSize: "14px" }} /> : <SouthIcon sx={{ fontSize: "14px" }} />;
                    }
                    return <UnfoldMoreIcon />;
                }}
            >
                {label}
            </TableSortLabel>

    );
};

export default TableSortHeader;
