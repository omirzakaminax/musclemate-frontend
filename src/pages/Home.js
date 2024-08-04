import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import homeImage from '..musclemate-frontend/home.jpg';

const Home = () => {
    return (
        <Container className="container">
            <Box component="img" src={homeImage} alt="Home" width="100%" height="auto" />
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome to MuscleMate
            </Typography>
            <Typography variant="body1" component="p">
                MuscleMate is a high-tech glove designed for the rehabilitation of athletes with muscle injuries and the improvement of hand functionality.
            </Typography>
        </Container>
    );
};

export default Home;


