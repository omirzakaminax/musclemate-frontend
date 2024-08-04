import React from 'react';
import { Container, Typography } from '@mui/material';

const UserGuide = () => {
    return (
        <Container className="container">
            <Typography variant="h4" component="h1" gutterBottom>
                User Guide
            </Typography>
            <Typography variant="body1" gutterBottom>
                Welcome to the MuscleMate User Guide. Follow these steps to get started:
            </Typography>
            <ul>
                <li>
                    <Typography variant="body1" gutterBottom>
                        Step 1: Unbox your MuscleMate glove and ensure all components are present.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>
                        Step 2: Charge the glove using the provided charger.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>
                        Step 3: Download the MuscleMate app from the App Store or Google Play.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>
                        Step 4: Follow the in-app instructions to set up your profile and calibrate the sensors.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>
                        Step 5: Start your personalized recovery program and follow the guided exercises.
                    </Typography>
                </li>
            </ul>
        </Container>
    );
};

export default UserGuide;
