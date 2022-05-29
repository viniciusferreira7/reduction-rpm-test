import { FormGroup, TextField } from '@mui/material';

import React, { useState } from 'react';

export const Register = () => {
  const [values, setValues] = useState({
    entryValue: '',
    firstValue: '',
    secondValue: '',
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <FormGroup>
      <TextField
        id="entry"
        name="entryValue"
        type="text"
        variant="standard"
        label="Entry Value"
        margin="dense"
        onChange={handleChange}
      />
      <TextField
        id="firstValue"
        name="firstValue"
        type="text"
        variant="outlined"
        label="First Value"
        margin="dense"
        onChange={handleChange}
      />
      <TextField
        id="secondValue"
        name="secondValue"
        type="text"
        variant="outlined"
        label="Second Value"
        margin="dense"
        onChange={handleChange}
      />
    </FormGroup>
  );
};
