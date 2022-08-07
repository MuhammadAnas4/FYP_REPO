import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Axios from 'axios';
import BASE_URL from './Config';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  TextField,
  Typography,
  Grid
} from '@material-ui/core';

import Navbar from './Navbar/Navbar';
import Drawer from './Customers/Drawer/Drawer';

const useStyles = makeStyles((theme) => ({
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
    minWidth: '50%',
  },
  uperDiv: {
    display: 'flex',
    flex: 0.9,
    flexDirection: 'row',
    backgroundColor: 'white',
    [theme.breakpoints.down('md')]: {
      flexDirection: "column",
    },
  },
  lower: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  box: {
    display: 'flex',
    flex: 0.9,
    flexDirection: "column",
    marginTop: '4%',
    width: '70%',
    marginBottom: '3%',
    backgroundColor: 'white',
    boxShadow: "0 0 7px",
    alignItems: 'center',
    borderRadius: '1%',
    minWidth: '35%',
    [theme.breakpoints.down('md')]: {
      width: '85%',
    },
  },
  heading: {
    flex: 0.1,
    display: 'flex',
    textAlign: 'center',
    display: "inline",
    marginBottom: '3%'
  },
  childSub: {
    flexDirection: 'row',
  },
  large: {
    marginTop: "20px",
    width: theme.spacing(15),
    height: theme.spacing(15),
    fontSize: '50px',
    textAlign: 'center',
    justifyContent: 'center',
  },
}));


const RiderRegistration = () => {

  const classes = useStyles();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cnic, setCnic] = React.useState('');
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [houseNo, setHouseNo] = React.useState('');
  const [streetNo, setStreetNo] = React.useState('');
  const [nearBy, setNearBy] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleCnicChange = (e) => {
    setCnic(e.target.value)
  }

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value)
  }

  const handleHouseNoChange = (e) => {
    setHouseNo(e.target.value)
  }

  const handleStreetNoChange = (e) => {
    setStreetNo(e.target.value)
  }

  const handleNearByChange = (e) => {
    setNearBy(e.target.value)
  }

  const handlePasswordChange = (e) => {
    console.log(e.target.value)
    setPassword(e.target.value)
  }


  const handleSubmit = () => {

    if (name && email && cnic && mobileNumber && houseNo && streetNo && nearBy != '') {
      const data = {
        name: name,
        email: email,
        cnic: cnic,
        mobileNumber: mobileNumber,
        houseNo: houseNo,
        streetNo: streetNo,
        nearBy: nearBy,
        password: password,
        userType: 'Rider'
      }
      console.log(data)
      Axios.post(`${BASE_URL}/admin/addRider`, data)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  return (
    <div className={classes.main}>
      <Navbar />
      <div className={classes.root}>
        <div className={classes.drawer}>
          <Drawer />
        </div>
        <div className={classes.dashboard}>
          <div className={classes.uperDiv}>
            <Box
              width="50%"
              mx="auto"
              p="1%"
              borderRadius={30}
              bgcolor="white">

              <Container maxWidth="sm">
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="h6"
                    align="center"
                  >
                    Register Rider
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  label="Name"
                  margin="normal"
                  name="name"
                  onChange={handleNameChange}
                  value={name}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Email"
                  margin="normal"
                  name="email"
                  variant="outlined"
                  onChange={handleEmailChange}
                  value={email}
                />
                <TextField
                  fullWidth
                  label="CNIC"
                  margin="normal"
                  name="cnic"
                  variant="outlined"
                  // type='number'
                  onChange={handleCnicChange}
                  value={cnic}
                />
                <TextField
                  fullWidth
                  label="Mobile Number"
                  margin="normal"
                  name="mobileNumber"
                  // type='number'
                  variant="outlined"
                  onChange={handleMobileNumberChange}
                  value={mobileNumber}
                />
                <TextField
                  fullWidth
                  label="House No"
                  margin="normal"
                  name="houseNo"
                  variant="outlined"
                  onChange={handleHouseNoChange}
                  value={houseNo}
                />
                <TextField
                  fullWidth
                  label="Street No"
                  margin="normal"
                  name="streetNo"
                  variant="outlined"
                  onChange={handleStreetNoChange}
                  value={streetNo}
                />
                <TextField
                  fullWidth
                  label="Near By"
                  margin="normal"
                  name="nearBy"
                  variant="outlined"
                  onChange={handleNearByChange}
                  value={nearBy}
                />
                <TextField
                  fullWidth
                  label="Password"
                  margin="normal"
                  name="password"
                  type="password"
                  variant="outlined"
                  onChange={handlePasswordChange}
                  value={password}
                />
                <Box m={3} />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    Sign up now
                  </Button>
                </Box>
              </Container>
            </Box>
          </div>
        </div>
      </div>

    </div >
  );
};
export default RiderRegistration;