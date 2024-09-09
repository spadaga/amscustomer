// src/components/DataTable.js

import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,

  Typography, TableSortLabel,
  IconButton,

} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import CustomPrimaryButton from '../../Controls/CustomPrimaryButton';
import CustomTextField from '../../Controls/CustomTextField';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TableSearchBox from '../../Controls/TableSearchBox';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
const InventoryTable = ({ rows }) => {
  console.log(rows);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState('asc'); // Ascending or Descending order
  const [orderBy, setOrderBy] = useState('description'); // Which column is being sorted
  const totalPages = Math.ceil(rows.length / rowsPerPage); // Total number of pages
  const [currentPage, setCurrentPage] = useState(1);
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setCurrentPage(page);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleSortRequest = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  // Sorting logic
  const sortedRows = rows.sort((a, b) => {
    if (orderBy === 'description') {
      return order === 'asc'
        ? a.description.localeCompare(b.description)
        : b.description.localeCompare(a.description);
    } else if (orderBy === 'numberOfProducts') {
      return order === 'asc' ? a.numberOfProducts - b.numberOfProducts : b.numberOfProducts - a.numberOfProducts;
    } else if (orderBy === 'notificationEmailAddress') {
      return order === 'asc'
        ? a.notificationEmailAddress.localeCompare(b.notificationEmailAddress)
        : b.notificationEmailAddress.localeCompare(a.notificationEmailAddress);
    }
    return 0;
  });
  const filteredRows = Array.isArray(rows)
    ? rows.filter(row =>
      row.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.notificationEmailAddress.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : [];
  // Paginate the filtered rows
  const paginatedRows = filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage,

    
  );

  // Calculate the displayed range and total records
  const totalRecords = rows.length;
  const startIndex = page * rowsPerPage + 1;
  const endIndex = Math.min((page + 1) * rowsPerPage, totalRecords);

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
    }
  };

  const renderPagination = () => {
    const pageButtons = [];
    const maxButtons = 3; // Show 3 page buttons between [1] and [Last Page]

    // Always show page [1]
    pageButtons.push(
      <Button
        key={0}
       
        variant={page === 0 ? 'contained' : 'outlined'}
        onClick={() => handlePageChange(0)}
        style={{ margin: '0 2px' }}
        className={page === 0  ? 'current-page' : 'tbl__page__button'}
      >
        1
      </Button>
    );

    // Show ellipsis if current page is greater than maxButtons
    if (page > maxButtons) {
      pageButtons.push(<span  className='ellpsedots' key="left-ellipsis">...</span>);
    }

    // Display the middle pages
    const startPage = Math.max(1, page - 1); // At least 1 but adapt to current page
    const endPage = Math.min(totalPages - 1, startPage + maxButtons); // Don't exceed total pages

    for (let i = startPage; i < endPage; i++) {
      pageButtons.push(
        <Button
          key={i}
          variant={i === page ? 'contained' : 'outlined'}
          onClick={() => handlePageChange(i)}
          style={{ margin: '0 2px' }}
          //  className='tbl__page__button'
          //  className={`page-button ${currentPage === i ? 'current-page' : 'tbl__page__button'}`}

           className={i === page ? 'current-page' : 'tbl__page__button'}
        >
          {i + 1}
        </Button>
      );
    }

    // Show ellipsis before the last page if there are still pages to show
    if (endPage < totalPages - 1) {
      pageButtons.push(<span  className='ellpsedots' key="right-ellipsis">...</span>);
    }

    // Always show [Last Page]
    pageButtons.push(
      <Button
        key={totalPages - 1}
        variant={page === totalPages - 1 ? 'contained' : 'outlined'}
        onClick={() => handlePageChange(totalPages - 1)}
        style={{ margin: '0 2px' }}
        className={page === totalPages - 1  ? 'current-page' : 'tbl__page__button'}
      >
        {totalPages}
      </Button>
    );

    // Check if rows or filteredRows have data
    if (!Array.isArray(rows) || rows.length === 0) {
      return <p>No data available</p>;
    }
    // Left arrow button
    return (
      <>
        {page > 0 && (
          <IconButton onClick={() => handlePageChange(page - 1)} sx={{padding:"0px !important "}} className='tbl__page__button prearrow'>
            <ArrowBackOutlinedIcon />
          </IconButton>
        )}
        {pageButtons}
        {page < totalPages - 1 && (
          <IconButton onClick={() => handlePageChange(page + 1)} sx={{padding:"0px !important"}}  className='tbl__page__button nextarrow'>
            <ArrowForwardOutlinedIcon />
          </IconButton>
        )}
      </>
    );
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <TableSearchBox
        value={searchTerm}
        onChange={handleSearchChange}
        onClear={handleClearSearch}
      
      >

      </TableSearchBox>
      <Typography variant="body2" sx={{ mt: 2, mb: 2 }}>
        Showing {startIndex} to {endIndex} of {totalRecords} entries
      </Typography>
      {filteredRows.length > 0 ? (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell   className={`table-header ${orderBy === 'description' ? 'sorted-column' : ''}`} style={{ fontWeight: 'bold' }}>
                    <TableSortLabel
                      active={orderBy === 'description'}
                      direction={orderBy === 'description' ? order : 'asc'}
                      onClick={() => handleSortRequest('description')}


                    

                      IconComponent={() => {
                        if (orderBy === 'description') {
                          return order === 'asc' ? <NorthIcon sx={{ fontSize: "14px" }} /> : <SouthIcon sx={{ fontSize: "14px" }} />;
                        }
                        return <UnfoldMoreIcon />;
                      }}

                    >
                      Description
                    </TableSortLabel>
                  </TableCell>
                  <TableCell className={`table-header ${orderBy === 'numberOfProducts' ? 'sorted-column' : ''}`} style={{fontWeight: 'bold' }}>
                    <TableSortLabel
                      active={orderBy === 'numberOfProducts'}
                      direction={orderBy === 'numberOfProducts' ? order : 'asc'}
                      onClick={() => handleSortRequest('numberOfProducts')}
                      
                      IconComponent={() => {
                        if (orderBy === 'numberOfProducts') {
                          return order === 'asc' ? <NorthIcon sx={{ fontSize: "14px" }} /> : <SouthIcon sx={{ fontSize: "14px" }} />;
                        }
                        return <UnfoldMoreIcon />;
                      }}
                    >
                      # of Products
                    </TableSortLabel>
                  </TableCell>
                  <TableCell  className={`table-header ${orderBy === 'notificationEmailAddress' ? 'sorted-column' :''}`} style={{  fontWeight: 'bold' }}>
                    <TableSortLabel
                      active={orderBy === 'notificationEmailAddress'}
                      direction={orderBy === 'notificationEmailAddress' ? order : 'asc'}
                      onClick={() => handleSortRequest('notificationEmailAddress')}
                     
                      IconComponent={() => {
                        if (orderBy === 'notificationEmailAddress') {
                          return order === 'asc' ? <NorthIcon sx={{ fontSize: "14px" }} /> : <SouthIcon sx={{ fontSize: "14px" }} />;
                        }
                        return <UnfoldMoreIcon />;
                      }}
                    >
                      Notification Email Address
                    </TableSortLabel>
                  </TableCell>
                  <TableCell style={{  fontWeight: 'bold' }}>Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedRows && paginatedRows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.description}</TableCell>
                    <TableCell sx={{
                      textAlign: 'center',
                      '&.MuiTableCell-root':
                      {
                        textAlign: 'center !important'

                      }


                    }}>{row.numberOfProducts}</TableCell>
                    <TableCell>{row.notificationEmailAddress}</TableCell>
                    <TableCell>
                      <CustomPrimaryButton
                        variant="contained"
                        color="primary"
                        startIcon={<EditIcon />}
                      >
                        Edit
                      </CustomPrimaryButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '16px' }}>
            {renderPagination()}
          </div>
          {/* <TablePagination
                        component="div"
                        count={filteredRows.length}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        rowsPerPageOptions={[5, 10, 25]}
                    /> */}
        </>
      ) : (
        <p>No matching records found</p>
      )}
    </div>
  );
};

export default InventoryTable;
