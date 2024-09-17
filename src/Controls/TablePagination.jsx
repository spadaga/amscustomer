// components/PaginationControls.js
import React from 'react';
import { Button, IconButton } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const TablePagination = ({ page, totalPages, handlePageChange }) => {
    if (totalPages <= 1) return null;

    const pageButtons = [];
    const maxButtons = 3;
    const startPage = Math.max(0, page - Math.floor(maxButtons / 2));
    const endPage = Math.min(totalPages - 1, startPage + maxButtons - 1);

    if (startPage > 0) {
        pageButtons.push(
            <Button
                key={0}
                variant={page === 0 ? 'contained' : 'outlined'}
                onClick={() => handlePageChange(0)}
                style={{ margin: '0 2px' }}
                className={page === 0 ? 'current-page' : 'tbl__page__button'}
            >
                1
            </Button>
        );
        if (startPage > 1) {
            pageButtons.push(<span className='ellpsedots' key="left-ellipsis">...</span>);
        }
    }

    for (let i = startPage; i < endPage; i++) {
        pageButtons.push(
            <Button
                key={i}
                variant={i === page ? 'contained' : 'outlined'}
                onClick={() => handlePageChange(i)}
                style={{ margin: '0 2px' }}
                className={i === page ? 'current-page' : 'tbl__page__button'}
            >
                {i + 1}
            </Button>
        );
    }


    if (endPage < totalPages - 1) {
        pageButtons.push(<span className='ellpsedots' key="right-ellipsis">...</span>);
    }

    pageButtons.push(
        <Button
            key={totalPages - 1}
            variant={page === totalPages - 1 ? 'contained' : 'outlined'}
            onClick={() => handlePageChange(totalPages - 1)}
            style={{ margin: '0 2px' }}
            className={page === totalPages - 1 ? 'current-page' : 'tbl__page__button'}
        >
            {totalPages}
        </Button>
    );

    return (
        <>
        {page > 0 && (
            <IconButton onClick={() => handlePageChange(page - 1)} sx={{ padding: "0px !important " }} className='tbl__page__button prearrow'>
                <ArrowBackOutlinedIcon />
            </IconButton>
        )}
        {pageButtons}
        {page < totalPages - 1 && (
            <IconButton onClick={() => handlePageChange(page + 1)} sx={{ padding: "0px !important" }} className='tbl__page__button nextarrow'>
                <ArrowForwardOutlinedIcon />
            </IconButton>
        )}
    </>
    );
};

export default TablePagination;
