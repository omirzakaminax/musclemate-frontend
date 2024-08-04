import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © 2024 MuscleMate. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
