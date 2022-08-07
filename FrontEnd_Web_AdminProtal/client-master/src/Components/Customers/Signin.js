import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    TextField,
    Box,
    Button,
    Dialog,
    img,
    Avatar,
    Divider,
    Typography,
    FormControlLabel,
    Checkbox,
} from '@material-ui/core';
import Navbar from '../Navbar/Navbar';
import { Redirect } from 'react-router-dom';
import { green, orange } from '@material-ui/core/colors';

import { Face, Fingerprint } from '@material-ui/icons';
// import { Input } from "@chakra-ui/react"

import LoginLogo from '../../Assets/login.png'

import { Helmet } from 'react-helmet';

import Axios from 'axios';

import { LogIn } from '../Customers/Redux/Actions/Action';

import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';

import BASE_URL from '../Config';


const useStyles = makeStyles((theme) => ({
    parentDiv: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F0F0F0',
        height: '100vh'
    },
    childDiv: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F0F0F0',
        [theme.breakpoints.down("md")]: {
            width: '100%',
            flexDirection: 'column',
        },
    },
    rightChildDiv: {
        display: 'flex',
        flex: 0.6,
        flexDirection: 'column',
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
        // [theme.breakpoints.down("md")]: {
        //     width: '100%',
        //     justifyContent: 'center',
        //     alignItems: 'center'
        // },
    },
    leftChildDiv: {
        display: 'flex',
        flex: 0.4,
        flexDirection: 'column',
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '80%',
        height: '40%',
        marginRight: '20%',
        [theme.breakpoints.down("md")]: {
            width: '50%',
            height: '50%',
            flexDirection: 'column',
            marginRight: '1%',
        },
    },
    rightSubChildDiv: {
        display: 'flex',
        flex: 0.9,
        margin: '10%',
        flexDirection: "column",
        marginTop: '4%',
        width: '70%',
        backgroundColor: 'white',
        boxShadow: "1px 10px 40px rgba(0, 0, 0, 0.2)",
        alignItems: 'center',
        borderRadius: '2%',
        minWidth: '50%',
    },
    logo: {
        display: 'flex',
        flex: 0.2,
        fontWeight: 'bold',
        // backgroundColor: 'red',
        // width:'100%',
        justifyContent: 'center'
    },
    clogo: {
        width: '100%',
        height: '50%',
        borderRadius: '100%'
    },

}));

const LoginButton = withStyles((theme) => ({
    root: {
        backgroundColor: green[900],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);

export default function Login() {

    const classes = useStyles();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [registerNow, setRegisterNow] = React.useState(false);
    const [Login, setLogin] = React.useState(false);

    const dispatch = useDispatch();

    const { loggedIn } = useSelector(state => state.auth);

    if (loggedIn === true) {
        return <Redirect to='/adsApproval' />
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleRegisterNow = () => {
        setRegisterNow(true);
    }

    const HandleLogin = () => {
        console.log(email)
        console.log(password)
        console.log(BASE_URL)
        if (email && password != '') {
            if (email === 'admin@gmail.com' && password === 'admin') {
                Axios.post(`${BASE_URL}/login`,
                    {
                        email: email,
                        password: password,
                    },
                )
                    .then((res) => {
                        console.log(res)
                        const token = res.data.token;
                        const expiry = res.data.expiry;
                        dispatch(LogIn(token, expiry));
                    }).catch((error) => {
                        console.log(error)
                        alert('Please Enter Valid Credentials')
                    });
            }
        }
        else {
            alert('Spmething went wrong')
        }

        // Axios.get(`https://d8bf-2400-adc1-151-ba00-f03d-ad73-cabc-2469.ngrok.io/api/AuthUser?Cnic=${email}&Password=${password}`)
        //     .then((res) => {
        //         console.log(res.data[0].CNIC)
        //         const cnic = res.data[0].CNIC
        //         console.log(cnic)
        //         dispatch(LogIn(cnic));
        //     }).catch((error) => {
        //         console.log(error)
        //         alert('User Does Not Exist')
        //     });
    }

    // const HandleLogin = () => {

    //     Axios.post('http://localhost:5000/login',
    //         {
    //             email: email,
    //             password: password,
    //         },
    //     )
    //         .then((res) => {
    //             console.log(res)
    //             const token = res.data.token;
    //             const expiry = res.data.expiry;
    //             dispatch(LogIn(token,expiry));
    //         }).catch((error) => {
    //             console.log(error)
    //         });
    // }

    if (registerNow === true) {
        return <Redirect to='/typeofaccounts' />
    }

    return (
        <div className={classes.parentDiv}>
            <Navbar />
            <div className={classes.childDiv}>
                <div className={classes.rightChildDiv}>
                    <div className={classes.rightSubChildDiv}>
                        <div className={classes.logo}>
                            <Box
                                color="green"
                                fontSize={{ xs: 'body2.fontSize', sm: 'h6.fontSize', md: 'h5.fontSize' }}
                                p={{ xs: 2, sm: 3, md: 4 }}
                            >
                                RENT BUCKET ADMIN PORTAL
                            </Box>
                        </div>
                        <div>
                            <Grid container justify="center">
                                <Typography variant="h4" gutterBottom>
                                    Login
                                </Typography>
                            </Grid>
                            <Divider />
                            {/* <Grid container justify="center" style={{ marginTop: '20px' }}>
                                <Avatar style={{width:'50px', height:'50px'}} />
                            </Grid> */}
                            <Grid container spacing={3} alignItems="flex-end" style={{ marginTop: '40px' }}>
                                <Grid item>
                                    <Face />
                                </Grid>
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField id="employeeId" label="Email" type="text" fullWidth autoFocus required
                                        onChange={handleEmailChange}
                                        value={email} />
                                </Grid>
                            </Grid>
                            <Grid container spacing={3} alignItems="flex-end">
                                <Grid item>
                                    <Fingerprint />
                                </Grid>
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField id="password" label="Password" type="password" fullWidth required
                                        onChange={handlePasswordChange}
                                        value={password}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center" justify="space-between" style={{ marginTop: '20px' }}>
                                <Grid item md={true} sm={true} xs={true}>
                                    <FormControlLabel control={
                                        <Checkbox
                                            color="primary"
                                        />
                                    } label="Remember me" />
                                </Grid>
                            </Grid>
                            <Grid container justify="center" style={{ marginTop: '10px', marginBottom: '30px' }}>
                                {/* <Button variant="contained" color="primary" size="large" onClick={handleRegisterNow} style={{ textTransform: "none", marginRight: '30px' }} >Register Now</Button> */}
                                <LoginButton variant="contained" color="primary" style={{ width: '100px' }} onClick={HandleLogin}>
                                    Login
                                </LoginButton>
                            </Grid>
                        </div>
                    </div>
                </div>
                <div className={classes.leftChildDiv}>
                    <img className={classes.image} src={LoginLogo} />
                </div>
            </div>
        </div >
    );
}
