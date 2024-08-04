import React from 'react';
import { Container, Typography } from '@mui/material';

const Features = () => {
    return (
        <Container className="container">
            <Typography variant="h4" component="h1" gutterBottom>
                Features of MuscleMate
            </Typography>
            <Typography variant="body1" gutterBottom>
                MuscleMate is packed with features designed to enhance your recovery and improve your performance:
            </Typography>
            <ul>
                <li>
                    <Typography variant="body1" gutterBottom>
                        Advanced EMG and NMI technology for precise muscle monitoring and stimulation.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>
                        Personalized recovery programs tailored to your specific needs.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>
                        Real-time progress tracking and detailed performance reports.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>
                        Comfortable and ergonomic design for easy and extended use.
                    </Typography>
                </li>
            </ul>
        </Container>
    );
};

export default Features;
