import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          About MuscleMate
        </Typography>
        <Typography variant="body1" gutterBottom>
          MuscleMate is an innovative device designed to help athletes recover from muscle injuries and enhance hand functionality. Our team of engineers and doctors have collaborated to create a product that combines cutting-edge technology with ease of use. We believe that every athlete deserves the best support in their rehabilitation and training processes.
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          Mission:
        </Typography>
        <Typography variant="body1">
          Our mission is to provide athletes with effective and affordable tools for recovery and improvement of hand functionality, utilizing advanced technology and a personalized approach.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
