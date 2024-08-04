import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const FAQ = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" gutterBottom>
          Find answers to frequently asked questions about MuscleMate:
        </Typography>
        <Typography variant="body1">
          <strong>How does MuscleMate work?</strong>
          <br />
          MuscleMate uses EMG and NMI technology for muscle rehabilitation.
          <br /><br />
          <strong>How do I set up the glove?</strong>
          <br />
          Follow the instructions in the app to set up the glove.
          <br /><br />
          <strong>What exercises can I do with MuscleMate?</strong>
          <br />
          The app provides personalized exercise programs.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" href="#/user-guide">
            Learn More
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default FAQ;
