import React from 'react';
import { Container, Typography } from '@mui/material';

const UserDashboard = () => {
    return (
        <Container className="container">
            <Typography variant="h4" component="h1" gutterBottom>
                User Dashboard
            </Typography>
            <Typography variant="body1" gutterBottom>
                Welcome to your personalized dashboard. Here you can:
            </Typography>
            <ul>
                <li>
                    <Typography variant="body1" gutterBottom>
                        View your recovery progress and performance metrics.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>
                        Update your personal information and preferences.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom>
                        Access your personalized recovery programs and exercises.
                    </Typography>
                </li>
            </ul>
        </Container>
    );
};

export default UserDashboard;
