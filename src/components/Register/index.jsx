import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import { FormGroup, TextField } from '@mui/material';

import React, { useState } from 'react';
import { FlagMessage } from '../FlagMessage';

export const Register = () => {
  const [values, setValues] = useState({
    reductionValue: 0,
    inputValue: 0,
    outputValue: 0,
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
    input: '',
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: Number(e.target.value) });

    if (isNaN(values[e.target.name])) {
      setStatus({
        type: 'error',
        message: 'Not a number',
        input: e.target.name,
      });
    } else {
      setStatus({
        type: '',
        message: '',
        input: '',
      });
      if (values.inputValue / values.outputValue !== Infinity) {
        setResult(values.inputValue / values.outputValue);
        if (
          values.reductionValue * 0.05 > result &&
          values.reductionValue * -0.05 < result
        ) {
          setStatus({
            type: 'success',
            message: 'Passed',
          });
        }
      }
    }
  };

  console.log(typeof result);
  console.log(values.inputValue);
  console.log(status.input);

  return (
    <FormGroup>
      {values.inputValue === 0 || values.outputValue === 0 ? (
        <FlagMessage success={false}>
          Don`t forget the value of the reduction
        </FlagMessage>
      ) : null}
      {status.input === 'reductionValue' ? (
        <FlagMessage success={false}>{status.message}</FlagMessage>
      ) : null}
      <TextField
        id="reduction"
        name="reductionValue"
        type="text"
        variant="outlined"
        label="Reduction"
        margin="dense"
        onChange={handleChange}
      />
      {status.input === 'inputValue' ? (
        <FlagMessage success={false}>{status.message}</FlagMessage>
      ) : null}
      <TextField
        id="inputValue"
        name="inputValue"
        type="text"
        variant="outlined"
        label="Input value"
        margin="dense"
        onChange={handleChange}
      />
      {status.input === 'outputValue' ? (
        <FlagMessage success={false}>{status.message}</FlagMessage>
      ) : null}
      <TextField
        id="outputValue"
        name="outputValue"
        type="text"
        variant="outlined"
        label="Output value"
        margin="dense"
        onChange={handleChange}
      />
      {status.type === 'error' && (
        <FlagMessage icon>
          <SettingsSharpIcon />
        </FlagMessage>
      )}
      {typeof result === 'number' && !isNaN(result) ? (
        <FlagMessage number={true}>{result.toFixed(2)}</FlagMessage>
      ) : null}
      {status.type === 'success' && (
        <FlagMessage success>{status.message}</FlagMessage>
      )}
    </FormGroup>
  );
};
