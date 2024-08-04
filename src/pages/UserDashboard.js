import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const UserDashboard = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          User Dashboard
        </Typography>
        <Typography variant="body1">
          Welcome to your dashboard! Here you can manage your profile, view your data, access exercise programs, get personalized recommendations, and track your massage history.
        </Typography>
      </Box>
    </Container>
  );
}

export default UserDashboard;
