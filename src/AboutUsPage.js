import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Footer from './footer';
const AboutUsPage = () => {
  return (
    <div>
    <Box
    sx={{
      maxWidth: 600,
      margin: 'auto',
      mt: 8,
      backgroundImage: `url('https://tse2.mm.bing.net/th?id=OIP.wSIL5oDWVUOhuzIXTCawTgHaEA&pid=Api&P=0&h=180')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    >
    <Paper elevation={3} sx={{ padding: 3, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
    <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
          About My Bank
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify' }}>
          Our Bank is a trusted financial partner dedicated to providing secure and innovative banking services.
          With a commitment to excellence, we strive to meet the financial needs of individuals and businesses
          through personalized and reliable solutions.
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify', mt: 2 }}>
          Founded on the principles of integrity and customer satisfaction, Our Bank continues to evolve and
          adapt to the changing needs of our clients in the dynamic financial landscape.
        </Typography>
      </Paper>
    </Box>
    <br/>
    <br/>
    <br/>
    <Footer/>
    </div>
  );
};
export default AboutUsPage;
