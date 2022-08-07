import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Button,
    Divider,
    hexToRgb,
} from '@material-ui/core';

import Navbar from '../Navbar/Navbar';
import Drawer from '../Customers/Drawer/Drawer';

import Axios from 'axios';
import moment from 'moment';

import Pagination from '../InnovestWebsite/Screens/Mawazna/Pagination';

import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

import { green, orange, red } from '@material-ui/core/colors';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import BASE_URL from '../Config';

var selectAmc = 0

var category = 0

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: 'red',
    },
    navBar: {
        display: 'flex',
        flex: 0.1,
        backgroundColor: 'green',
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
    subUpperDiv: {
        display: 'flex',
        flex: 0.7,
        flexDirection: 'column',
        // backgroundColor: 'red',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    lowerDiv: {
        display: 'flex',
        height: 'auto',
        // backgroundColor: 'red',
        margin: 10,
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
        width: '65%',
        height: 100,
        marginLeft: '5%',
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
const InvestButton = withStyles((theme) => ({
    root: {
        // backgroundColor: green[900],
        color: 'red',
        padding: 8,
        '&:hover': {
            backgroundColor: red[900],
            color: 'white',

        },
    },
}))(Button);
const ComapreFunds = withStyles((theme) => ({
    root: {
        backgroundColor: orange[900],
        padding: 8,
        '&:hover': {
            backgroundColor: orange[700],
        },
    },
}))(Button);

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function AllRiders(props) {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const [deleteUser, setDeleteUser] = React.useState(false);

    const [pickupOrders, setPickupOrders] = React.useState([]);

    const [allRentedProducts, setAllRentedProducts] = React.useState([]);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [postPerPage, setPostPerPage] = React.useState(10);


    useEffect(() => {
        window.scrollTo(0, 0)
        // setOpen(true);
        getDetails();

    }, [deleteUser]);

    const getDetails = () => {
        Axios.get(`http://localhost:5000/admin/pickedupProducts`)
            .then((res) => {
                console.log(res.data);
                setPickupOrders(res.data);
            }).catch((error) => {
                console.log(error)
            });
    }

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = allRentedProducts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const today = new Date();
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
                    <div style={{ flex: 0.8, flexDirection: 'row', }}>
                        {
                            pickupOrders.length > 0 ?
                                (
                                    <div>
                                        {
                                            pickupOrders.filter((item) => {  return item.returnDate < moment().format()})
                                            .map((fund) => (
                                                <div key={fund._id} style={{
                                                    display: 'flex', margin: 20, flexDirection: 'row', height: '15vh', justifyContent: 'center', alignItems: 'center', alignContent: 'center',
                                                    boxShadow: "0px 0px 1px 1px #186c9b",
                                                    backgroundColor: 'whitesmoke'
                                                }}>
                                                    <div style={{ display: 'flex', flex: 0.3, margin: 5, flexDirection: 'column', height: '10vh', textAlign: 'center', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                                        <img className={classes.image} src={fund.image} />
                                                    </div>
                                                    <div style={{ display: 'flex', flex: 0.35, margin: 5, flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                                        <Typography style={{ fontSize: 13, color: '#186c9b', fontWeight: 'bold' }}>{fund.title}</Typography>
                                                        <Typography style={{ fontSize: 10, color: 'grey', fontWeight: 'bold' }}>{fund.category}{','}{fund.description}</Typography>
                                                    </div>
                                                    <div style={{ display: 'flex', flex: 0.25, margin: 5, flexDirection: 'row', }}>
                                                        <div style={{ display: 'flex', flex: 0.5, margin: 5, flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                                            <Typography style={{ fontSize: 13, color: '#186c9b', fontWeight: 'bold' }}>Rs.{fund.price}</Typography>
                                                            <Typography style={{ fontSize: 10, color: 'grey', fontWeight: 'bold' }}>{fund.mobileNumber}</Typography>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: 'flex', flex: 0.2, margin: 5, flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                                        <InvestButton variant="outlined" style={{ width: '100px', textTransform: "none", }}>
                                                            <Link to={{ pathname: '/returnPickupProductsDetails', state: { fund } }} style={{ textDecoration: 'none', textTransform: "none" }}>
                                                                Details
                                                            </Link>
                                                        </InvestButton>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <div style={{ flex: 0.2, justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                            <Pagination postPerPage={postPerPage} totalPost={pickupOrders.length} paginate={paginate} />
                                        </div>
                                    </div>
                                ) : <div style={{ display: 'flex', flex: 0.5, margin: 5, flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                    <Typography style={{ fontSize: 15, color: '#186c9b', fontWeight: 'bold' }}> No Result Found</Typography>
                                </div>
                        }
                    </div>
                </div>
            </div>

        </div >

    )
}
