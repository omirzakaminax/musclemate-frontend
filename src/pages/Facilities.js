import React from 'react';
import { Container, Typography } from '@mui/material';

const Facilities = () => {
    return (
        <Container className="container">
            <Typography variant="h4" component="h1" gutterBottom>
                Our Facilities
            </Typography>
            <Typography variant="body1" gutterBottom>
                At MuscleMate, we pride ourselves on providing state-of-the-art facilities to support your rehabilitation and training needs. Our facilities are equipped with the latest technology and staffed by experienced professionals dedicated to your recovery and improvement.
            </Typography>
            <Typography variant="body1" gutterBottom>
                From cutting-edge EMG and NMI equipment to comfortable and supportive environments, our facilities are designed to give you the best possible experience. Join us at MuscleMate and take advantage of our top-tier resources to enhance your recovery journey.
            </Typography>
        </Container>
    );
};

export default Facilities;
