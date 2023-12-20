import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';

const backgroundStyles = {
  backgroundImage: 'url("https://tse4.mm.bing.net/th?id=OIP.GDm-XRII-eJ1XNFcCfcvtwHaEm&pid=Api&P=0&h=180")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'Black', // Set text color to white for better readability
};

const AccountOverviewPage = () => {
  return (
    <Box
    sx={{
        maxWidth: 600,
        margin: 'auto',
        mt: 8,
        backgroundImage: `url('https://tse4.mm.bing.net/th?id=OIP.GDm-XRII-eJ1XNFcCfcvtwHaEm&pid=Api&P=0&h=180')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}
    >      

<Paper elevation={3} sx={{ padding: 3, backgroundColor: 'rgba(255, 255, 255, 0.8)',
    // backgroundImage: `url('https://tse3.mm.bing.net/th?id=OIP.A1iOPDDIdy-XyDRj75WkVQHaEo&pid=Api&P=0&h=180')`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    
    }}>
      <Typography variant="h4" gutterBottom>
        Account Overview
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to your account overview page. Here, you can view important details about your account and
        perform various actions to manage your finances.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Account Details
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Account Number:</strong> XXXX-XXXX-XXXX-1234
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Account Balance:</strong> $1,000.00
      </Typography>
      <Typography variant="h5" gutterBottom>
        Recent Transactions
      </Typography>
      {/* Display a list of recent transactions or use a component like TransactionHistoryPage */}
    </Paper>
    </Box>
  );
};

export default AccountOverviewPage;
