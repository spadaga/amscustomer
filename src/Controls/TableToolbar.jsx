// src/Components/TableToolbar.js
import React from 'react';
import { Typography, Checkbox, TextField, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import TableSearchBox from './TableSearchBox';


const TableToolbar = ({ searchTerm, onSearch, onClearSearch, selectAll, onSelectAll, totalEntries, currentEntries }) => {
    return (
        <div>
            <TableSearchBox
                value={searchTerm}
                onChange={onSearch}
                onClear={onClearSearch}
            />
            <Typography variant="body2" sx={{ mt: 2, mb: 2 }}>
                Showing {currentEntries} of {totalEntries} entries
            </Typography>
          
        </div>
    );
};

export default TableToolbar;
