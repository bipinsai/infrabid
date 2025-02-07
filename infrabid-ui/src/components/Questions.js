import React, { useState } from 'react';
import AccordionComponent from './shared/accordion';
import { Box, Typography } from '@mui/material';
import '../styles/Questions.scss'

const questionsData = [{
    "question": "What is InfraBid?",
    "answer": "InfraBid is a tech-enabled platform that offers real-time bidding solutions for construction subcontracting and equipment rentals. It simplifies processes, reduces costs, and enhances market reach for stakeholders across the construction industry."
}, {
    "question": "How does InfraBid work for subcontractors?",
    "answer": "You can use the Accordion component from Material UI to display collapsible content."
}, {
    "question": "How does InfraBid work for subcontractors?",
    "answer": "You can use the Accordion component from Material UI to display collapsible content."
}, {
    "question": "How does InfraBid work for subcontractors?",
    "answer": "You can use the Accordion component from Material UI to display collapsible content."
}]

const Questions = () => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const handleAccordionChange = (index) => (event, isExpanded) => {
        setExpandedIndex(isExpanded ? index : null);  // Close accordion if it's collapsed
    };

    return (
        <div className="questions-container">
            <Typography variant="h4" className="questions-title">
                Still Wondering? <span className="highlight">We’ve Got the Answers.</span>
            </Typography>
            <Box className="questions-wrapper">
                <div style={{ flexBasis: '30%' }}></div>
                <div style={{ flexBasis: '70%' }}>
                    {questionsData.map((question, index) => (
                        <AccordionComponent key={index}
                            question={question}
                            index={index}
                            expandedIndex={expandedIndex}
                            handleChange={handleAccordionChange} />
                    ))}
                </div>
            </Box>
        </div>
    )
}

export default Questions