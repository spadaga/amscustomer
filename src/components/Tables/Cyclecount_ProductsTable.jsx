import React, { useState, useMemo } from 'react';
import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Checkbox,
    TableCell,
    styled,
    Box,
    Tooltip,
} from '@mui/material';

import TablePagination from '../../Controls/TablePagination';
import TableToolbar from '../../Controls/TableToolbar';
import TableSortHeader from '../../Controls/TableSortHeader';
import CustomPrimaryButton from '../../Controls/CustomPrimaryButton';

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
    width: '21px',
    height: '21px',
    borderRadius: '6px',
    '&.Mui-checked': {
        outline: '2px solid var(--ced-color-global-white) !important',
        boxShadow: '0px 0px 0px 4px var(--ced-color-global-brand-3) !important',
    },
    '& .MuiSvgIcon-root': {
        fontSize: '28px',
    },
}));

const Cyclecount_ProductsTable = ({ rows, movedRows, onAddToCount }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('product');
    const [selected, setSelected] = useState([]);
    const [selectAll, setSelectAll] = useState(false);


    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter out rows that have been moved to the right side
    const availableRows = useMemo(() => {
        return rows.filter(row => !movedRows.some(movedRow => movedRow.product === row.product));
    }, [rows, movedRows]);

    const filteredRows = useMemo(() => {
        return availableRows.filter(row =>
            Object.values(row).some(val =>
                val.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [availableRows, searchTerm]);

    const sortedRows = useMemo(() => {
        return filteredRows.sort((a, b) => {
            if (orderBy === 'product') {
                return order === 'asc'
                    ? a.product.localeCompare(b.product)
                    : b.product.localeCompare(a.product);
            }
            return (a[orderBy] - b[orderBy]) * (order === 'asc' ? 1 : -1);
        });
    }, [filteredRows, order, orderBy]);

    const paginatedRows = useMemo(() => {
        return sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [sortedRows, page, rowsPerPage]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
    };
    const handleAddToCount = () => {
        const selectedRows = availableRows.filter(row => selected.includes(row.product));
        onAddToCount(selectedRows); // Pass selected rows to the parent component
        setSelected([]);
        setSelectAll(false);
    };
    return (
        <div>
            <TableToolbar
                searchTerm={searchTerm}
                onSearch={handleSearch}
                onClearSearch={handleClearSearch}
                totalEntries={rows.length}
            />

            
                    <TableContainer component={Paper} style={{ overflowX: 'hidden' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <StyledCheckbox
                                            checked={selectAll}
                                            onChange={(event) => setSelectAll(event.target.checked)}
                                        />
                                    </TableCell>
                                    {['Product', 'Location', 'Quantity'].map((header) => (
                                        <TableCell key={header}>
                                            <TableSortHeader
                                                orderBy={orderBy}
                                                order={order}
                                                handleSortRequest={() => setOrderBy(header.toLowerCase())}
                                                label={header}
                                            />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {searchTerm === '' ? (
               <TableRow>
               <TableCell colSpan={4} align="center">
                   <Typography variant="body2">
                       Search for products to display.
                   </Typography>
               </TableCell>
           </TableRow>
            ) : filteredRows.length > 0 ? (
               
                                paginatedRows.map((row) => (
                                    <TableRow key={row.product}>
                                        <TableCell>
                                            <StyledCheckbox
                                                checked={selected.includes(row.product)}
                                                onChange={() => {
                                                    const newSelected = selected.includes(row.product)
                                                        ? selected.filter(item => item !== row.product)
                                                        : [...selected, row.product];
                                                    setSelected(newSelected);
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>{row.product}</TableCell>
                                        <TableCell>{row.location}</TableCell>
                                        <TableCell>{row.quantity}</TableCell>
                                    </TableRow>
                                ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={4} align="center">
                                            No products found.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
                        <CustomPrimaryButton
                            variant="contained"
                            color="primary"
                            onClick={handleAddToCount}
                            disabled={selected.length === 0}
                        >
                            Add to count
                        </CustomPrimaryButton>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                        <TablePagination page={page} totalPages={Math.ceil(filteredRows.length / rowsPerPage)} handlePageChange={handlePageChange} />
                    </Box>
              
           
        </div>
    );
};

export default Cyclecount_ProductsTable;
