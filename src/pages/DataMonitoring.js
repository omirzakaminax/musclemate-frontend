import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const DataMonitoring = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Data Monitoring
        </Typography>
        <Typography variant="body1">
          MuscleMate continuously monitors your progress and provides detailed reports on your muscle activity, fatigue levels, and overall performance. Track your progress and adjust your rehabilitation program as needed.
        </Typography>
      </Box>
    </Container>
  );
}

export default DataMonitoring;
