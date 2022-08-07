import React, { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
// import {
//   Button,
// } from '@material-ui/core';
import Button from '@mui/material/Button';
import { Redirect } from 'react-router-dom';

import { LogOut } from '../Redux/Actions/Action';

import { useDispatch } from 'react-redux';

const Sidebar = () => {

  const [onCLickLogout, setOnClickLogout] = React.useState(true);

  const dispatch = useDispatch();

  return (
    <div
      style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#0A2127">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            COLLAPSE
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            {/* <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink> */}
            <NavLink exact to="/adsApproval" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Ads Approval</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/riderRegistration" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Rider Registration</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/allUsers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">All Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/allRiders" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">All Riders</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/rentedProducts" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Rented Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/allAssignedProducts" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Assigned Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/deliveredProducts" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Delivered Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/returnPickupProducts" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Return Pickup Products</CDBSidebarMenuItem>
            </NavLink>
            
            {/* <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Personal Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/E-Transaction" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                E-Transaction
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AccountStatement" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Account Statement</CDBSidebarMenuItem>
            </NavLink> */}
            <NavLink exact to="/login" activeClassName="activeClicked" onClick={() => { dispatch(LogOut()) }}>
              <CDBSidebarMenuItem icon="user">Logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        {/* {
          onCLickLogout === false ?
            (<Redirect to='/' />) : null
        } */}
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          {/* <Button variant="contained" color="success" size="small" onCLick={() => { setOnClickLogout(false) }}>
            LOGOUT
          </Button> */}
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;