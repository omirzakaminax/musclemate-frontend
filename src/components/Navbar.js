import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MuscleMate
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/how-it-works">How It Works</Button>
        <Button color="inherit" component={Link} to="/technology">Technology</Button>
        <Button color="inherit" component={Link} to="/features">Features</Button>
        <Button color="inherit" component={Link} to="/user-guide">User Guide</Button>
        <Button color="inherit" component={Link} to="/support">Support</Button>
        <Button color="inherit" component={Link} to="/data-monitoring">Data Monitoring</Button>
        <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
        <Button color="inherit" component={Link} to="/faq">FAQ</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
