import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const ContactUs = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you have any questions or suggestions, please contact us:
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> support@musclemate.com
          <br />
          <strong>Phone:</strong> +123 456 7890
          <br />
          <strong>Address:</strong> 123 Main Street, Anytown, USA
        </Typography>
      </Box>
    </Container>
  );
}

export default ContactUs;
