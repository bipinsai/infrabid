import React from 'react';
import { TextField } from '@mui/material';

const TextFieldComponent = ({ label, type = 'text', value, onChange, multiline = false, rows = 4, ...props }) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      multiline={multiline}
      rows={rows}
      {...props}
    />
  );
};

export default TextFieldComponent;
