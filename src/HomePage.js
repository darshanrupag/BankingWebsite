// HomePage.js
import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import Footer from './footer';

const HomePage = () => {
  return (
    <div>
    <Box sx={{ maxWidth: 600, margin: 'auto', mt: 8 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
          Welcome to My Bank
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify' }}>
          Our bank is committed to providing excellent banking services to our customers. Explore our website to
          manage your finances with ease and take advantage of our various services.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button variant="contained" color="primary" component="a" href="/signup">
            Get Started
          </Button>
        </Box>
      </Paper>
    </Box>
    <br/>
    <br/>
    <br/>
      <Footer/>
      </div>
  );
};

export default HomePage;
