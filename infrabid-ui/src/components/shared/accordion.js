import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
// import '../../styles/Accordion.css'
const AccordionComponent = ({ question, index, expandedIndex, handleChange }) => {

  const isExpanded = expandedIndex === index;

  return (
    <Accordion
      style={{
        margin: '0',
        boxShadow: 'none',
        borderRadius: '0px',
        background: 'none',
        borderBottom: isExpanded ? 'none' : '1px solid #ccc', // Add a border line at the bottom of each accordion
      }}
      expanded={expandedIndex === index}
      onChange={handleChange(index)}>
      <AccordionSummary
        expandIcon={
          expandedIndex === index ? (
            <RemoveIcon style={{ color: 'black' }} />
          ) : (
            <AddIcon style={{ color: 'black' }} />
          )
        }
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
      >
        <Typography style={{ fontWeight: 600, fontSize: '20px', color: '#000000' }}>{question.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography style={{ fontWeight: 400, fontSize: '20px', color: '#000000', opacity: '70%', textAlign: 'start' }}>{question.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
