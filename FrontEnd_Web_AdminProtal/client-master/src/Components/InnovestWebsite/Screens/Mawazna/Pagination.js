import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Button,
    Divider,
} from '@material-ui/core';
import { borderColor } from '@mui/system';

export default function Pagination({ postPerPage, totalPost, paginate }) {

    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div style={{ borderWidth:'1px',borderColor: 'green', justifyContent:'space-between', margin:10}}>
            {
                pageNumber.map(number => (
                    <Button variant="outlined" style={{borderWidth:'1px',borderColor: 'green',color:'black', margin:3}} onClick={() => {paginate(number)}} key={number}>
                        {number}
                    </Button>
                ))
            }
        </div>

    )
}

