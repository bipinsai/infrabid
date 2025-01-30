import React from "react";
import { Box, Typography } from "@mui/material";
import "../../styles/BidCard.scss";

const BidCard = ({
    tenderId = 34245253,
    title,
    category,
    tenderValue,
    location,
    startDate,
    endDate,
    bidClosingDate,
    bidClosingTime,
    component,
}) => {
    return (
        <>
            {component === 'tender' ? <Box className="bid-card">
                <Typography variant="caption" className="tender-id-label">
                    Tender ID <span className="tender-id-value">{tenderId}</span>
                </Typography>
                <Box className="bid-closing">
                    <Typography variant="caption" className="bid-label">BID CLOSING</Typography>
                    <Typography variant="h6" className="bid-date">{bidClosingDate}</Typography>
                    <Typography variant="body2" className="bid-time">{bidClosingTime}</Typography>                 </Box>
                <Box className="bid-details">
                    <Typography variant="h6" className="bid-title">
                        {title}
                    </Typography>
                    <hr />
                    <Box className="bid-meta">
                        <Typography>
                            <span>CATEGORY</span> {category}
                        </Typography>
                        <Typography>
                            <span>TENDER VALUE</span> {tenderValue}
                        </Typography>
                        <Typography>
                            <span>LOCATION</span> {location}
                        </Typography>
                        <Typography>
                            <span>WORK START DATE</span> {startDate}
                        </Typography>
                        <Typography>
                            <span>WORK END DATE</span> {endDate}
                        </Typography>
                    </Box>
                </Box>
            </Box> : <Box className="bid-card">
                <Box className="bid-closing">
                    <Typography variant="caption" className="bid-label">BID CLOSING</Typography>
                    <Typography variant="h6" className="bid-date">{bidClosingDate}</Typography>
                    <Typography variant="body2" className="bid-time">{bidClosingTime}</Typography>                 </Box>
                <Box className="bid-details">
                    <Typography variant="h6" className="bid-title">
                        {title}
                    </Typography>
                    <hr />
                    <Box className="bid-meta">
                        <Typography>
                            <span>EQUIPMENT CATEGORY</span> {category}
                        </Typography>
                        <Typography>
                            <span>LOCATION</span> {location}
                        </Typography>
                        <Typography>
                            <span>WORK START DATE</span> {startDate}
                        </Typography>
                        <Typography>
                            <span>WORK END DATE</span> {endDate}
                        </Typography>
                    </Box>
                </Box>
            </Box>}
        </>
    );
};

export default BidCard;

