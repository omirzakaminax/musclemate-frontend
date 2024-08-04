import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const UserGuide = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          MuscleMate User Guide
        </Typography>
        <Typography variant="body1" gutterBottom>
          To start using MuscleMate, follow these steps:
        </Typography>
        <Typography variant="body1">
          <strong>1. Put on the glove and connect it to the smartphone app via Bluetooth.</strong>
          <br />
          <strong>2. Take a short test to determine the current state of your hand.</strong>
          <br />
          <strong>3. Follow the app's recommendations for exercises and glove settings.</strong>
          <br />
          <strong>4. Use the massage mode to relax muscles after training.</strong>
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" href="/path/to/guide.pdf">
            Download Full Guide (PDF)
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default UserGuide;

