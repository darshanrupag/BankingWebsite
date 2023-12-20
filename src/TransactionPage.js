// TransactionHistoryPage.js
import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const transactionStyles = {
  listItem: {
    border: '1px solid #ddd',
    marginBottom: '8px',
    borderRadius: '4px',
    padding: '8px',
  },
};

const transactions = [
  { id: 1, description: 'Payment received', amount: 100.00, date: '2023-01-15' },
  { id: 2, description: 'Purchase at Grocery Store', amount: -50.00, date: '2023-01-12' },
  { id: 3, description: 'ATM withdrawal', amount: -20.00, date: '2023-01-10' },
  // Add more transactions as needed
];

const TransactionPage = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', mt: 8 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Transaction History
        </Typography>
        <List>
          {transactions.map((transaction) => (
            <ListItem key={transaction.id} sx={transactionStyles.listItem}>
              <ListItemText
                primary={transaction.description}
                secondary={`Amount: ${transaction.amount.toFixed(2)} | Date: ${transaction.date}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default TransactionPage;
