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
    FormLabel,
} from '@mui/material';

import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import TablePagination from '../../Controls/TablePagination';
import TableToolbar from '../../Controls/TableToolbar';
import TableSortHeader from '../../Controls/TableSortHeader';
import { pink } from '@mui/material/colors';

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
    width: '21px',
    height: '21px',
    borderRadius: '6px',

    '&.Mui-checked': {
        outline: '2px solid var(--ced-color-global-white) !important',
        boxShadow: '0px 0px 0px 4px var(--ced-color-global-brand-3) !important',
        backgroundColor: '0px 0px 0px 4px var(--ced-color-global-brand-3) !important',
    },
    '&.MuiCheckbox-indeterminate': {
        backgroundColor: '0px 0px 0px 4px var(--ced-color-global-brand-3) !important',
    },
    '& .MuiSvgIcon-root': {
        fontSize: '28px',
        borderRadius: '6px',
    },
}));
// Styled Tooltip
const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip arrow {...props} classes={{ tooltip: className }} />
))(({ theme }) => ({
    backgroundColor: '#000000', // Change background color
    color: 'green', // Change text color
    fontSize: '0.75rem',
    border: '1px solid #ccc',
    borderRadius:"10px",
    padding:"6px 16px"
}));
// Define common styles for colored labels
const firstLabelStyle = {
    color: 'yellow ',  // Customize the color for the first label
    fontSize:"12px"
  };
  
  const secondLabelStyle = {
    color: 'aqua ',  // Customize the color for the second label
     fontSize:"10px"
  };
  
// Define a styled div with common styles for labels
const StyledTypography = styled(Typography)(({ theme }) => ({
    
    fontWeight:  'bold' ,
  }));

const TransferItemsTable = ({ rows }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('product');
    const [selected, setSelected] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const totalPages = Math.ceil(rows.length / rowsPerPage);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSortRequest = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const filteredRows = useMemo(() => {
        return rows.filter(row =>
            Object.values(row).some(val =>
                val.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [rows, searchTerm]);

    const sortedRows = useMemo(() => {
        return filteredRows.sort((a, b) => {
            const valA = a.product?.Description || '';  // Use optional chaining (?.) to safely access Description
            const valB = b.product?.Description || '';  // Same here
            if (orderBy === 'Description') {
                return order === 'asc'
                    ? valA.localeCompare(valB)
                    : valB.localeCompare(valA);
            }
            return (a[orderBy] - b[orderBy]) * (order === 'asc' ? 1 : -1);
        });
    }, [filteredRows, order, orderBy]);
    

    const paginatedRows = useMemo(() => {
        return sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [sortedRows, page, rowsPerPage]);

    const handlePageChange = (newPage) => {
        if (newPage >= 0 && newPage < totalPages) {
            setPage(newPage);
        }
    };

    const handleSelectAll = (event) => {
        const isChecked = event.target.checked;
        setSelectAll(isChecked);
        setSelected(isChecked ? filteredRows.map(row => row.product) : []);
    };

    const handleSelectRow = (event, product) => {
        const selectedIndex = selected.indexOf(product);
        const newSelected = selectedIndex === -1
            ? [...selected, product]
            : selected.filter(item => item !== product);
        setSelected(newSelected);
        setSelectAll(newSelected.length === filteredRows.length);
    };

    const isRowSelected = (product) => selected.includes(product);

    const isIndeterminate = useMemo(() => {
        return filteredRows.length > 0 && selected.length > 0 && selected.length < filteredRows.length;
    }, [filteredRows, selected]);

    const handleClearSearch = () => {
        setSearchTerm('');
    };

    return (
        <div>
            <TableToolbar
                searchTerm={searchTerm}
                onSearch={handleSearch}
                onClearSearch={handleClearSearch}
                selectAll={selectAll}
                onSelectAll={handleSelectAll}
                totalEntries={rows.length}
                currentEntries={`${(page * rowsPerPage) + 1} to ${Math.min((page + 1) * rowsPerPage, rows.length)}`}
            />
            {filteredRows.length > 0 ? (
                <>
                    <TableContainer component={Paper} style={{ overflowX: 'hidden' }}>
                        <Table>
                            <TableHead>
                                <TableRow style={{}}>
                                    <TableCell className="table-header" style={{ width: '60px' }}>
                                        <StyledCheckbox
                                            checked={selectAll}
                                            onChange={handleSelectAll}
                                            sx={{
                                                '&.Mui-checked': {
                                                    color: 'var(--ced-color-global-brand-2)',
                                                },
                                            }}
                                        />
                                    </TableCell>
                                    {['Product', 'YourPart#', 'Your Description', 'Transferqty', 'MinQty*', 'MaxQty'].map((header, index) => (
                                        <TableCell
                                            key={header}
                                            className={`table-header ${orderBy === header.toLowerCase() ? 'sorted-column' : ''}`}
                                            style={{
                                                maxWidth: header === 'Product' ? '200px' : header === '' ? '0px' : '150px',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                padding: '0px'
                                            }}
                                        >
                                            <TableSortHeader
                                                orderBy={orderBy}
                                                order={order}
                                                handleSortRequest={handleSortRequest}
                                                label={header}
                                               
                                            />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {paginatedRows.map((row) => (
                                    <TableRow key={row.product} style={{}}>
                                        <TableCell>
                                            <StyledCheckbox
                                                checked={isRowSelected(row.product)}
                                                onChange={(event) => handleSelectRow(event, row.product)}
                                                sx={{
                                                    '&.Mui-checked': {
                                                        color: 'var(--ced-color-global-brand-2)',
                                                    },
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            <CustomTooltip

                                                title={
                                                    <div>
                                                        <StyledTypography ><FormLabel sx={firstLabelStyle}>Description:</FormLabel> <FormLabel  sx={secondLabelStyle}>{row.product?.Description || 'No Description'}</FormLabel > </StyledTypography>
                                                        <StyledTypography ><FormLabel sx={firstLabelStyle}>MFR:</FormLabel> <FormLabel  sx={secondLabelStyle}>{row.product.MFR}</FormLabel ></StyledTypography>
                                                        <StyledTypography><FormLabel sx={firstLabelStyle}>Catalog#:</FormLabel> <FormLabel  sx={secondLabelStyle}>{row.product.CATALOG}</FormLabel ></StyledTypography>
                                                        <StyledTypography ><FormLabel sx={firstLabelStyle}>Available#:</FormLabel> <FormLabel  sx={secondLabelStyle}>{row.product.Available}</FormLabel ></StyledTypography>
                                                        <StyledTypography ><FormLabel sx={firstLabelStyle}>Min#:</FormLabel> <FormLabel  sx={secondLabelStyle}>{row.product.Min}</FormLabel ></StyledTypography>
                                                        <StyledTypography ><FormLabel sx={firstLabelStyle}>Max#:</FormLabel> <FormLabel  sx={secondLabelStyle}>{row.product.Max}</FormLabel ></StyledTypography>
                                                    </div>
                                                }
                                                arrow
                                                placement="top"
                                            >
                                                <div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                                                    
                                                    <div style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>

                                                        <Typography variant="body2" className='prod_desc' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                            {row.product?.Description || 'No Description'}
                                                        </Typography>
                                                        <Typography variant="caption" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                            MFR: {row.product.MFR} | Catalog#: {row.product.CATALOG}
                                                        </Typography>
                                                        <Typography variant="caption" style={{ display: 'block', marginTop: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                        Available: {row.product.Available} | Min#: {row.product.Min} | Max#: {row.product.Max}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </CustomTooltip>
                                        </TableCell>
                                        <TableCell className='centered-cell' style={{ padding: '0px', textAlign: 'center', whiteSpace: 'nowrap' }}>
                                            {row.yourPartNumber}
                                        </TableCell>
                                        <TableCell className='centered-cell' style={{ padding: '0px', textAlign: 'center', whiteSpace: 'nowrap' }}>
                                            {row.yourDescription}
                                        </TableCell>
                                        <TableCell className='centered-cell' style={{ padding: '0px', textAlign: 'center', whiteSpace: 'nowrap' }}>
                                            {row.transferQty}
                                        </TableCell>
                                        <TableCell className='centered-cell' style={{ padding: '0px', textAlign: 'center', whiteSpace: 'nowrap' }}>
                                            {row.minQty}
                                        </TableCell>
                                        <TableCell className='centered-cell' style={{ padding: '0px', textAlign: 'center', whiteSpace: 'nowrap' }}>
                                            {row.maxQty}
                                        </TableCell>
                                      
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '16px' }}>
                        <TablePagination page={page} totalPages={totalPages} handlePageChange={handlePageChange} />
                    </div>
                </>
            ) : (
                <Typography variant="body2" sx={{ mt: 2 }}>
                    No results found.
                </Typography>
            )}
        </div>
    );
};

export default TransferItemsTable;
