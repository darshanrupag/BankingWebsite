// ContactUsPage.js
import React from 'react';
import { Box, Typography, Paper, TextField, Button } from '@mui/material';

const ContactUsPage = () => {
    return (
        <Box
        sx={{
            maxWidth: 600,
            margin: 'auto',
            mt: 8,
            backgroundImage: `url('https://tse3.mm.bing.net/th?id=OIP.A1iOPDDIdy-XyDRj75WkVQHaEo&pid=Api&P=0&h=180')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        >      
    
    <Paper elevation={3} sx={{ padding: 3, backgroundColor: 'rgba(255, 255, 255, 0.8)',
        // backgroundImage: `url('https://tse3.mm.bing.net/th?id=OIP.A1iOPDDIdy-XyDRj75WkVQHaEo&pid=Api&P=0&h=180')`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        
        }}>
        <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify', mb: 2 }}>
          If you have any questions or concerns, please feel free to contact us. We are here to assist you.
        </Typography>
        <form>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Your Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Send Message
          </Button>
        </form>
      </Paper>
    </Box>

  );
};

export default ContactUsPage;
