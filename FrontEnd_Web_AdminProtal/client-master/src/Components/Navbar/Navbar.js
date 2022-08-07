import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Box } from '@material-ui/core';
import Logo from '../../Assets/Logo.png'


const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        flex: 0.1,
        width: "100%",
        minWidth: '50%',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow: "0 2px 7px 0 rgba(0,0,0,0.35)",
        backgroundColor:'#0A2127'
        // backgroundColor: '#0b6623'
    },
    navBar: {
        display: 'flex',
        justifyContent: 'center'
    },
    image: {
        borderRadius: 100,
        width: 50,
        height: 50,
        marginLeft:'5%',
        marginTop: 7,
        [theme.breakpoints.down("xs")]: {
            width: 40,
            height: 40,
            marginTop:5
        },
        [theme.breakpoints.down("sm")]: {
            marginTop:4.5
        },
    },
}));

export default function Navbar() {

    const classes = useStyles();

    return (
        <div className={classes.main}>
            <div className={classes.navBar}>
                <Box
                    color="white"
                    fontSize={{ xs: 'body2.fontSize', sm: 'h6.fontSize', md: 'h5.fontSize' }}
                    p={{ xs: 2, sm: 2, md: 2 }}
                >
                    RENT BUCKET
                </Box>
                {/* <Typography
                    style={{ color: 'white', marginTop: "10px" }}
                    color="textPrimary"
                    variant="h5"
                    align="center"
                >
                    INNOVEST DIGITAL APP
                </Typography> */}
            </div>
        </div>
    );
}
