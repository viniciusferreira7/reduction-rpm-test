import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';

import React, { useEffect, useState } from 'react';

import { FlagMessage } from '../FlagMessage';
import { FormGroupStyled, TextFieldStyled } from './styles';

export const Register = () => {
  const [values, setValues] = useState({
    reductionValue: '',
    inputValue: '',
    outputValue: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
    input: '',
  });

  const [error, setError] = useState({
    type: '',
    message: '',
    input: '',
  });

  const [result, setResult] = useState(null);

  const isNumber = (number) => {
    return !isNaN(parseFloat(number)) && isFinite(number);
  };

  const soma = (inputValue, outputValue) => {
    return parseFloat(inputValue) / parseFloat(outputValue);
  };

  const percentage = (value, percentage) => {
    return parseFloat(value) * percentage + parseFloat(value);
  };

  useEffect(() => {
    setResult(soma(values.inputValue, values.outputValue).toFixed(3));
  }, [values, status]);

  useEffect(() => {
    if (
      percentage(values.reductionValue, 0.05) >= result &&
      percentage(values.reductionValue, -0.05) <= result
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
  }, [values, result]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

    if (!isNumber(e.target.value)) {
      setError({
        type: 'error',
        message: 'Not a number',
        input: e.target.name,
      });
    } else {
      setError({
        type: '',
        message: '',
        input: e.target.name,
      });
    }
  };

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
      {error.type === 'error' &&
      error.input === 'reductionValue' &&
      values.reductionValue !== '' ? (
        <FlagMessage success={false}>{error.message}</FlagMessage>
      ) : null}
      <TextFieldStyled
        name="reductionValue"
        type="text"
        variant="outlined"
        placeholder="Reduction"
        value={values.reductionValue}
        margin="dense"
        onChange={handleChange}
      />
      {error.type === 'error' && error.input === 'inputValue' ? (
        <FlagMessage success={false}>{error.message}</FlagMessage>
      ) : null}
      <TextFieldStyled
        name="inputValue"
        type="text"
        variant="outlined"
        placeholder="Input value"
        margin="dense"
        onChange={handleChange}
      />
      {error.type === 'error' && error.input === 'outputValue' ? (
        <FlagMessage success={false}>{error.message}</FlagMessage>
      ) : null}
      <TextFieldStyled
        name="outputValue"
        type="text"
        variant="outlined"
        placeholder="Output value"
        margin="dense"
        onChange={handleChange}
      />
      {error.type === 'error' && (
        <FlagMessage icon>
          <SettingsSharpIcon fontSize="large" />
        </FlagMessage>
      )}

      {!isNaN(result) && status.type === 'success' ? (
        <>
          <FlagMessage success>{status.message}</FlagMessage>
          <FlagMessage number={true}>Result: {result}</FlagMessage>{' '}
        </>
      ) : null}
      {!isNaN(result) && status.type === 'error 2' ? (
        <>
          <FlagMessage success={false}>{status.message}</FlagMessage>
          <FlagMessage number={true}>Result: {result}</FlagMessage>{' '}
        </>
      ) : null}
      <FlagMessage creators={true}>Created by Vinicius and Cleber</FlagMessage>
    </FormGroupStyled>
  );
};
