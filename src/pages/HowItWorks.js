import React from 'react';
import { Container, Typography } from '@mui/material';

const HowItWorks = () => {
    return (
        <Container className="container">
            <Typography variant="h4" component="h1" gutterBottom>
                How MuscleMate Works
            </Typography>
            <Typography variant="body1" gutterBottom>
                MuscleMate is designed to be easy to use and highly effective. Here's how it works:
            </Typography>
            <ul>
                <li>
                    <Typography variant="body1" gutterBottom>
                        Wear the MuscleMate glove and connect it to your device.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>
                        Calibrate the sensors to ensure accurate EMG readings.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>
                        Start your personalized recovery program and follow the guided exercises.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>
                        Monitor your progress in real-time and adjust your program as needed.
                    </Typography>
                </li>
            </ul>
        </Container>
    );
};

export default HowItWorks;
