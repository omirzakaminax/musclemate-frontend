import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Technology = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Technology
        </Typography>
        <Typography variant="body1">
          MuscleMate uses cutting-edge technologies including Electromyography (EMG) and Neuro-Muscular Stimulation (NMI) to provide a comprehensive approach to hand rehabilitation and functionality improvement.
        </Typography>
      </Box>
    </Container>
  );
}

export default Technology;
