import React from 'react';
import { Container, Typography } from '@mui/material';

const Facilities = () => {
    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Facilities
            </Typography>
            <Typography variant="body1" component="p">
                MuscleMate offers state-of-the-art facilities to ensure the best rehabilitation experience. Our facilities include advanced electromyography and neuro-muscular stimulation technologies, comfortable massage modules, and a user-friendly app for real-time data monitoring.
            </Typography>
        </Container>
    );
};

export default Facilities;
