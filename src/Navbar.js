// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useAuth } from './AuthContext';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <AppBar position="static"  color="primary" sx={{ mb: 4}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <AccountBalanceIcon/>
          My Bank
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        
        <Button color="inherit" component={Link} to="/about">
          About Us  
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact Us
        </Button>
        <Button color="inherit" component={Link} to="/account">
          Account
        </Button>
        <Button color="inherit" component={Link} to="/transaction">
          Transactions
        </Button>
        {/* <Typography component={Link} to="/account" color="inherit" style={{ marginLeft: 'auto' }}>
          Account
        </Typography>
        <Typography component={Link} to="/transactions" color="inherit">
          Transactions
        </Typography> */}
        {user ? (
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
