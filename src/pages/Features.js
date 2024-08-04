import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Features = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          MuscleMate Features and Benefits
        </Typography>
        <Typography variant="body1" gutterBottom>
          MuscleMate offers numerous features and benefits for athletes:
        </Typography>
        <Typography variant="body1">
          - Personalized Recovery Programs: Individual approach for each user.
          <br />
          - Ease of Use: Simple setup and control via the app.
          <br />
          - Multifunctionality: Combination of rehabilitation and training functions.
          <br />
          - Improved Blood Circulation: Built-in vibration modules provide gentle massage.
        </Typography>
      </Box>
    </Container>
  );
}

export default Features;
