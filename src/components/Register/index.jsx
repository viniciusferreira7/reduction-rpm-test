import { FormGroup, TextField } from '@mui/material';

import React, { useState } from 'react';
import { FlagMessage } from '../FlagMessage';

export const Register = () => {
  const [values, setValues] = useState({
    entryValue: null,
    firstValue: null,
    secondValue: null,
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: Number(e.target.value) });

    if (isNaN(values[e.target.name])) {
      setStatus({
        type: 'error',
        message: 'Not a number',
      });
    } else {
      setStatus({
        type: '',
        message: '',
      });
      if (values.firstValue / values.secondValue !== Infinity) {
        setResult(values.firstValue / values.secondValue);
        if (
          values.entryValue * 0.05 > result &&
          values.entryValue * -0.05 < result
        ) {
          setStatus({
            type: 'success',
            message: 'Passed',
          });
        }
      }
    }
  };

  return (
    <FormGroup>
      {status.type === 'error' && <FlagMessage>{status.message}</FlagMessage>}
      <TextField
        id="entry"
        name="entryValue"
        type="text"
        variant="outlined"
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
      {status.type === 'success' && <FlagMessage>{status.message}</FlagMessage>}
    </FormGroup>
  );
};
