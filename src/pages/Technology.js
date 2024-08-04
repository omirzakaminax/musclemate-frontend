import React from 'react';
import { Container, Typography } from '@mui/material';

const Technology = () => {
    return (
        <Container className="container">
            <Typography variant="h4" component="h1" gutterBottom>
                Our Technology
            </Typography>
            <Typography variant="body1" gutterBottom>
                MuscleMate leverages the power of electromyography (EMG) and neuro-muscular stimulation (NMI) to provide an advanced and effective rehabilitation experience. Our technology is designed to monitor muscle activity, stimulate muscle contractions, and optimize recovery.
            </Typography>
            <Typography variant="body1" gutterBottom>
                EMG technology allows us to accurately measure the electrical activity produced by your muscles, providing valuable data on muscle performance and recovery status. NMI technology uses this data to deliver targeted stimulation to your muscles, enhancing blood circulation and promoting faster healing.
            </Typography>
        </Container>
    );
};

export default Technology;

