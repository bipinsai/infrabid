import React from 'react';
import { Button } from '@mui/material';

const ButtonComponent = ({ 
    placeholder,
    color = 'primary',
    variant = 'contained',
    size = 'medium',
    customColor,
    padding,
    width,
    height,
    fontSize,
    fontWeight,
    lineHeight,
    textColor,
    borderRadius,
    border,
    ...props
}) => {
    return (
        <Button
            variant={variant} // Makes the button customizable with 'text', 'outlined', 'contained'
            color={color}     // Button color (primary, secondary, etc.)
            size={size}       // Button size (small, medium, large)
            {...props}        // Spread any other props like onClick, disabled, etc.
            sx={{
                boxShadow: 'none',
                border: border || '0px',
                borderRadius: borderRadius || '0px',  // Custom borderRadius (default to '0px' if not provided)
                width: width || 'auto',  // Custom width (default to 'auto' if not provided)
                height: height || 'auto', // Custom height (default to 'auto' if not provided)
                padding: padding || '16px 24px', // Custom padding (default to '16px 24px' if not provided)
                fontSize: fontSize || '16px',   // Apply custom font size (default to 16px)
                fontWeight: fontWeight || 700,  // Apply custom font weight (default to 500)
                // lineHeight: lineHeight || 25.86, // Apply custom line height (default to 1.5)
                backgroundColor: customColor,  // Apply custom background color
                color: textColor || '#fff', // Optional: Adjust text color if custom color is applied
                ...props.sx // Spread any additional sx props passed in
            }}
            onClick={() => window.location.href = "/comingsoon"}
        >
            {placeholder} {/* Button label */}
        </Button>
    );
};

export default ButtonComponent;
