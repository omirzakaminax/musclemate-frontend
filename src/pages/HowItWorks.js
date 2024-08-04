import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const HowItWorks = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          How MuscleMate Works
        </Typography>
        <Typography variant="body1" gutterBottom>
          MuscleMate uses electromyography (EMG) and neuromuscular stimulation (NMI) technology to collect data on muscle activity and provide personalized recovery programs.
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          Key Functions of the Glove:
        </Typography>
        <Typography variant="body1">
          - Electromyography (EMG)
          <br />
          - Neuromuscular Stimulation (NMI)
          <br />
          - Massage Mode
          <br />
          - Hand Functionality Improvement
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          Working Mechanism:
        </Typography>
        <Typography variant="body1">
          <strong>1. Data Collection:</strong> The glove's sensors capture electromyographic signals from hand muscles and transmit the data to the smartphone app.
          <br />
          <strong>2. Data Analysis:</strong> The app analyzes the data and provides tailored exercise recommendations.
          <br />
          <strong>3. Stimulation and Exercises:</strong> The glove uses electromagnetic pulses to stimulate muscles, with real-time feedback during exercises.
          <br />
          <strong>4. Massage and Relaxation:</strong> Built-in vibration modules create massage effects to promote blood circulation and reduce muscle tension.
        </Typography>
      </Box>
    </Container>
  );
}

export default HowItWorks;

