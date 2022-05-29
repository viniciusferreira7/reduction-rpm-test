import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';

import React, { useState } from 'react';

import { FlagMessage } from '../FlagMessage';
import { FormGroupStyled, TextFieldStyled } from './styles';

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
            message: 'The reduction passed the test',
            input: '',
          });
        } else {
          setStatus({
            type: 'error 2',
            message: 'The reduction did not pass the test',
            input: '',
          });
        }
      }
    }
  };

  console.log(typeof result);
  console.log(values.inputValue);
  console.log(status.input);

  return (
    <FormGroupStyled>
      <h1>Reduction rpm test</h1>
      {values.inputValue === 0 ||
      values.outputValue === 0 ||
      values.reductionValue == 0 ? (
        <FlagMessage success={false}>
          Don`t forget the value of the reduction
        </FlagMessage>
      ) : null}
      {status.input === 'reductionValue' ? (
        <FlagMessage success={false}>{status.message}</FlagMessage>
      ) : null}
      <TextFieldStyled
        name="reductionValue"
        type="text"
        variant="outlined"
        placeholder="Reduction"
        margin="dense"
        onChange={handleChange}
      />
      {status.input === 'inputValue' ? (
        <FlagMessage success={false}>{status.message}</FlagMessage>
      ) : null}
      <TextFieldStyled
        name="inputValue"
        type="text"
        variant="outlined"
        placeholder="Input value"
        margin="dense"
        onChange={handleChange}
      />
      {status.input === 'outputValue' ? (
        <FlagMessage success={false}>{status.message}</FlagMessage>
      ) : null}
      <TextFieldStyled
        name="outputValue"
        type="text"
        variant="outlined"
        placeholder="Output value"
        margin="dense"
        onChange={handleChange}
      />
      {status.type === 'error' && (
        <FlagMessage icon>
          <SettingsSharpIcon fontSize="large" />
        </FlagMessage>
      )}
      {status.type == 'success' &&
      typeof result === 'number' &&
      !isNaN(result) ? (
        <FlagMessage number={true}>Result: {result.toFixed(2)}</FlagMessage>
      ) : null}
      {status.type === 'success' && (
        <FlagMessage success>{status.message}</FlagMessage>
      )}
      {values.reductionValue !== 0 && status.type === 'error 2' ? (
        <FlagMessage success={false}>{status.message}</FlagMessage>
      ) : null}
    </FormGroupStyled>
  );
};
