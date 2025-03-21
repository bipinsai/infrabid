import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import AccordionComponent from '../shared/accordion';
import '../../styles/Questions.scss'

const questionsData = [
    {
        "question": "What is InfraBid?",
        "answer": "InfraBid is a tech-enabled platform that offers real-time bidding solutions for construction subcontracting and equipment rentals. It simplifies processes, reduces costs, and enhances market reach for stakeholders across the construction industry."
    },
    {
        "question": "How does InfraBid work for subcontractors?",
        "answer": "Subcontractors can express interest in tenders, submit bids, and access opportunities tailored to their expertise. InfraBid provides a transparent process to compete for contracts through live and open bidding."
    },
    {
        "question": "How does InfraBid work for equipment providers?",
        "answer": "Equipment owners can list their machinery, get notified about requirements, and submit competitive bids. The platform enhances equipment utilization by enabling real-time bidding and connecting them with customers nationwide."
    },
    {
        "question": "What problems does InfraBid solve in the construction industry?",
        "answer": "InfraBid addresses issues like limited network access, dependency on mediators, underutilization of equipment, and unorganized subcontracting processes by providing a transparent, efficient, and tech-driven solution."
    },
    {
        "question": "Who can use InfraBid?",
        "answer": "InfraBid is built for: Contractors, Subcontractors, Equipment Owners, Equipment Customers, Project Management Consultants, Labor Suppliers, Homeowners, Architects, and Interior Designers."
    },
    {
        "question": "How can I list my equipment on InfraBid?",
        "answer": "Equipment providers can create a profile on InfraBid, list equipment with details like Category, Built Company, etc., and participate in bidding for requirements posted by equipment customers."
    },
    {
        "question": "How are tenders managed on InfraBid?",
        "answer": "The tender process includes: Tender listing, Expression of Interest (EoI) and payment of Earnest Money Deposit (EMD), Technical Qualification (optional), Financial qualification, Submission and evaluation of bids, Bid finalization by the contractor."
    },
    {
        "question": "Why should I use InfraBid instead of traditional methods?",
        "answer": "InfraBid offers: Reduced dependency on mediators, Cost savings, Time efficiency, and Greater visibility through transparent, live, and open bidding."
    },
    {
        "question": "How does InfraBid ensure transparency in the bidding process?",
        "answer": "InfraBid uses live, open bidding systems, allowing all participants to view and compete on real-time bids, fostering trust and eliminating hidden costs."
    },
    {
        "question": "What is the Earnest Money Deposit (EMD) in the bidding process?",
        "answer": "EMD is a refundable deposit paid during the Expression of Interest phase to demonstrate commitment and ensure serious participation. For bidders who do not win the tender, the deposit is completely refunded after the evaluation process is complete."
    }
];

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