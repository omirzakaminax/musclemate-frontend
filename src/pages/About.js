import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
    return (
        <Container className="container">
            <Typography variant="h4" component="h1" gutterBottom>
                About MuscleMate
            </Typography>
            <Typography variant="body1" gutterBottom>
                MuscleMate is a revolutionary high-tech glove designed for the rehabilitation of athletes with muscle injuries and the improvement of hand functionality. Our mission is to help athletes recover faster and improve their performance through innovative technology.
            </Typography>
            <Typography variant="body1" gutterBottom>
                Using advanced electromyography (EMG) and neuro-muscular stimulation (NMI) technologies, MuscleMate provides personalized recovery programs tailored to each individual's needs. Whether you're a professional athlete or someone recovering from an injury, MuscleMate is here to support you every step of the way.
            </Typography>
        </Container>
    );
};

export default About;
