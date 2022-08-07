import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Button,
    Divider,
} from '@material-ui/core';

import { ProgressBar } from 'react-bootstrap';


import Navbar from '../../../Navbar/Navbar';
import Drawer from '../../../Customers/Drawer/Drawer';

import Axios from 'axios';

import Pagination from './Pagination';

import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';


import { green, orange, red } from '@material-ui/core/colors';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import BASE_URL from '../../../Config';


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        height: 'auto',
        flexDirection: 'column',
        // backgroundColor: 'red',
    },
    navBar: {
        display: 'flex',
        flex: 0.1,
        backgroundColor: 'green',
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black'
    },
    title: {
        flexGrow: 1,
        color: 'black',
        marginLeft: theme.spacing(3),
    },
    image: {
        borderRadius: 100,
        width: 50,
        height: 50,
        margin: 5,
        marginLeft: theme.spacing(5),
        [theme.breakpoints.down("xs")]: {
            width: 40,
            height: 40,
            margin: 15,
        },
        [theme.breakpoints.down("sm")]: {
            margin: 20,
        },
    },
    savingImage: {
        borderRadius: 100,
        width: "60%",
        height: "60%",
        [theme.breakpoints.down("xs")]: {
            width: 40,
            height: 40,
            margin: 15,
        },
        [theme.breakpoints.down("sm")]: {
            margin: 20,
        },
    },
    upperDiv: {
        display: 'flex',
        // flex: 0.6,
        height: '25vh',
        backgroundColor: '#0A2127',
        justifyContent: 'center',
    },
    subRightUpperDiv: {
        display: 'flex',
        flex: 0.5,
        flexDirection: 'column',
        // backgroundColor: 'green',
        justifyContent: 'center',
    },
    lowerDiv: {
        display: 'flex',
        height: 'auto',
        flexDirection: 'column',
        // backgroundColor: 'green',
        boxShadow: "0px 0px 1px 1px #186c9b",
        margin: 20
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    main: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        height: '100vh',
    },
    root: {
        display: "flex",
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
        minWidth: '50%',
    },
    dashboard: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white',
        minWidth: '50%'
    },
    image: {
        borderRadius: 10,
        width: '20%',
        height: 120,
        [theme.breakpoints.down("xs")]: {
            width: 40,
            height: 40,
            marginTop: 5
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: 4.5
        },
    },
}));

const LoginButton = withStyles((theme) => ({
    root: {
        backgroundColor: green[900],
        padding: 8,
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);

const RejectButton = withStyles((theme) => ({
    root: {
        backgroundColor: red[900],
        padding: 8,
        '&:hover': {
            backgroundColor: red[700],
        },
    },
}))(Button);


function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function FundDetail(props) {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const [allAdDetails, setAllAdDetails] = React.useState({});
    const [addressDetails, setAddressDetails] = React.useState('');
    const [userDetails, setUserDetails] = React.useState('');

    const handleApproveButton = () => {
        console.log(allAdDetails._id)
        Axios.post(`${BASE_URL}/admin/changeAdStatus/${allAdDetails._id}`)
        .then((res) => {
            console.log(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const handleRejectButton = () => {
        console.log(allAdDetails._id)
        Axios.post(`${BASE_URL}/admin/declineAd/${allAdDetails._id}`)
        .then((res) => {
            console.log(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        setOpen(true)
        const { fund } = props.location.state;
        FetchAllDetails(fund._id);
    }, []);

    const FetchAllDetails = (adId) => {
        Axios.get(`${BASE_URL}/admin/adDetails/${adId}`)
            .then((res) => {
                // console.log(res.data);
                console.log(res.data);
                setAddressDetails(res.data.address);
                setAllAdDetails(res.data)
                setUserDetails(res.data.userId)
                setOpen(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className={classes.main}>
            <Navbar />
            <Backdrop className={classes.backdrop} open={open} >
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className={classes.root}>
                <div className={classes.drawer}>
                    <Drawer />
                </div>
                <div className={classes.dashboard}>
                    <div style={{ display: 'flex', flex: 0.3, flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flex: 0.7, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}>
                            <img className={classes.image} src={allAdDetails.image} />
                        </div>
                        <div style={{ display: 'flex', flex: 0.3, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}>
                            <Typography style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>{allAdDetails.title}</Typography>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flex: 0.1, flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}>
                            <Typography style={{ fontSize: 18, color: 'black' }}>{allAdDetails.description}</Typography>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flex: 0.4, flexDirection: 'row' }}>
                        <div style={{ display: 'flex', flex: 0.5, flexDirection: 'column' }}>
                            <div style={{ display: 'flex', flex: 0.2, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}>
                                <Typography style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>User Details</Typography>
                            </div>
                            <div style={{ display: 'flex', flex: 0.2, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}>
                                <Typography style={{ fontSize: 15, color: 'black' }}>{userDetails.name}</Typography>
                            </div>
                            <div style={{ display: 'flex', flex: 0.2, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}>
                                <Typography style={{ fontSize: 15, color: 'black' }}>{userDetails.mobileNumber}</Typography>
                            </div>
                            <div style={{ display: 'flex', flex: 0.2, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}>
                                <Typography style={{ fontSize: 15, color: 'black' }}>{userDetails.email}</Typography>
                            </div>
                            <div style={{ display: 'flex', flex: 0.2, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}>
                                <Typography style={{ fontSize: 15, color: 'black' }}>{addressDetails.houseNo} {addressDetails.streetNo} {addressDetails.nearBy}</Typography>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flex: 0.5, flexDirection: 'column' }}>
                            <div style={{ display: 'flex', flex: 0.2, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}>
                                <Typography style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Product Details</Typography>
                            </div>
                            <div style={{ display: 'flex', flex: 0.2, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}>
                                <Typography style={{ fontSize: 15, color: 'black' }}>{allAdDetails.title}</Typography>
                            </div>
                            <div style={{ display: 'flex', flex: 0.2, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}>
                                <Typography style={{ fontSize: 15, color: 'black' }}>{allAdDetails.category}</Typography>
                            </div>
                            <div style={{ display: 'flex', flex: 0.2, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}>
                                <Typography style={{ fontSize: 15, color: 'black' }}>Rs.{allAdDetails.price} per day</Typography>
                            </div>
                            <div style={{ display: 'flex', flex: 0.2, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}>
                                <Typography style={{ fontSize: 15, color: 'black' }}>{allAdDetails.description} </Typography>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flex: 0.2, flexDirection: 'row', justifyContent:'space-around', alignContent:'center', alignItems:'center' }}>
                        <LoginButton variant="contained" color="primary" style={{ width: '100px' }} onClick={handleApproveButton}>
                            Approve
                        </LoginButton>
                        <RejectButton variant="contained" color="primary" style={{ width: '100px' }} onClick={handleRejectButton}>
                            Decline
                        </RejectButton>
                    </div>
                </div>
            </div>
        </div >
    )
}

