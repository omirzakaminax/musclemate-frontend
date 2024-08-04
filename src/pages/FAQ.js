import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
    return (
        <Container className="container">
            <Typography variant="h4" component="h1" gutterBottom>
                Frequently Asked Questions
            </Typography>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>What is MuscleMate?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        MuscleMate is a high-tech glove designed for the rehabilitation of athletes with muscle injuries and the improvement of hand functionality. It uses advanced technologies like EMG and NMI to provide personalized recovery programs.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography>How does MuscleMate work?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        MuscleMate collects EMG signals from your muscles, analyzes them, and uses NMI to stimulate muscle contractions. This helps in muscle recovery, prevents atrophy, and enhances blood circulation, ensuring a faster and more effective rehabilitation process.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                    <Typography>Who can use MuscleMate?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        MuscleMate is designed for athletes of all levels who are recovering from muscle injuries or looking to improve hand functionality. It is suitable for both professional athletes and individuals undergoing rehabilitation.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
                    <Typography>How do I set up MuscleMate?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Setting up MuscleMate is easy. Follow the instructions in the user guide to connect the glove to your device, calibrate the sensors, and start your personalized recovery program. If you need any assistance, our support team is here to help.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
                    <Typography>What technologies are used in MuscleMate?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        MuscleMate uses electromyography (EMG) to monitor muscle activity and neuro-muscular stimulation (NMI) to stimulate muscle contractions. These technologies work together to provide effective and personalized recovery programs.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6a-content" id="panel6a-header">
                    <Typography>Can I track my progress with MuscleMate?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, MuscleMate allows you to monitor your progress in real-time. Our advanced data monitoring system provides detailed reports on your muscle activity, strength improvements, and recovery status.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel7a-content" id="panel7a-header">
                    <Typography>Is there customer support available?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Absolutely. Our support team is available to assist you with any questions or issues you may have. You can reach us at support@musclemate.com or call us at +123-456-7890.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel8a-content" id="panel8a-header">
                    <Typography>Where can I purchase MuscleMate?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        MuscleMate can be purchased directly from our website or through our authorized distributors. Visit our website for more details on purchasing options.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
};

export default FAQ;
