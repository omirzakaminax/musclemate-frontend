import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          MuscleMate: Your Path to Recovery and Enhanced Hand Functionality
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to the official MuscleMate website! Our device is designed for athletes who need rehabilitation after muscle injuries and aim to improve the functionality of their hands. Using advanced electromyography (EMG) and neuromuscular stimulation (NMI) technologies, MuscleMate provides personalized recovery and training programs.
        </Typography>
        <Box>
          <Button variant="contained" color="primary" href="#/about" sx={{ mr: 2 }}>
            Learn More
          </Button>
          <Button variant="contained" color="secondary" href="#/how-it-works" sx={{ mr: 2 }}>
            How It Works
          </Button>
          <Button variant="contained" color="primary" href="#/user-guide">
            Get Started
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;

