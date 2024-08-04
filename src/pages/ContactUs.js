import React from 'react';
import { Container, Typography } from '@mui/material';

const ContactUs = () => {
    return (
        <Container className="container">
            <Typography variant="h4" component="h1" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom>
                We would love to hear from you! Whether you have questions about our products, need support, or just want to give us feedback, please don't hesitate to reach out.
            </Typography>
            <Typography variant="body1" gutterBottom>
                Email: musclemate@gmail.com <br />
                Phone: +123-456-7890 <br />
                Address: 123 MuscleMate St, Astana city
            </Typography>
        </Container>
    );
};

export default ContactUs;
