import { Button, TextField } from '@mui/material';
import { Field, Form, Formik } from 'formik';

import React from 'react';
import * as Yup from 'yup';
import { FlagMessage } from '../FlagMessage';

import * as Styled from './styles';

export const Register = () => {
  const validate = Yup.object().shape({
    entry: Yup.number('Its required a number').required(
      'You need to fill in the input field',
    ),
    firstValue: Yup.number('Its required a number').required(
      'It is necessary to fill in the first value',
    ),
    secondValue: Yup.number('Its required a number').required(
      'It is necessary to fill in the second value',
    ),
  });

  // const onSubmit = (values, actions) => {
  //   console.log(values, actions);
  // };

  return (
    <Styled.Container>
      <Formik
        initialValues={{
          entry: '',
          firstValue: '',
          secondValue: '',
        }}
        validationSchema={validate}
        onSubmit={(values) => console.log(values)}
      >
        {({ errors }) => (
          <Form>
            {errors.entry && <FlagMessage>{errors.entry}</FlagMessage>}
            <Field
              component={TextField}
              id="entry"
              name="entry"
              type="text"
              variant="outlined"
              label="Entry"
              margin="dense"
            />

            {errors.firstValue && (
              <FlagMessage>{errors.firstValue}</FlagMessage>
            )}
            <Field
              component={TextField}
              id="firstValue"
              name="firstValue"
              type="text"
              variant="outlined"
              label="First Value"
            />
            {errors.secondValue && (
              <FlagMessage>{errors.secondValue}</FlagMessage>
            )}
            <Field
              component={TextField}
              id="secondValue"
              name="secondValue"
              type="text"
              variant="outlined"
              label="Second Value"
            />
            <Button type="submit" variant="outlined">
              Validate
            </Button>
          </Form>
        )}
      </Formik>
    </Styled.Container>
  );
};
