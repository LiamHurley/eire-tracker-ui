import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import '../styles/header.css';

const Header = () => {
  return (
    <Box component="header" className="header">
      {/* Logo/Brand Name */}
      <Typography variant="h4" className="logo">
        Irish Football
      </Typography>

      {/* Navigation Links */}
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </Box>
  );
};

export default Header;