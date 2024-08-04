import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const Support = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Support and Feedback
        </Typography>
        <Typography variant="body1" gutterBottom>
          We are always ready to help you with using MuscleMate. If you have any questions or need support, contact our team. We also welcome your feedback and suggestions to improve our product.
        </Typography>
        <Box component="form" sx={{ mt: 2 }}>
          <TextField fullWidth label="Name" variant="outlined" margin="normal" />
          <TextField fullWidth label="Email" variant="outlined" margin="normal" />
          <TextField fullWidth label="Message" variant="outlined" multiline rows={4} margin="normal" />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Send
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Support;
