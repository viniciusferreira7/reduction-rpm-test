import { TextField } from '@mui/material';
import { Field, Form, Formik } from 'formik';

import React from 'react';
import * as Yup from 'yup';

import * as Styled from './styles';

export const Register = () => {
  const validate = Yup.object().shape({
    entry: Yup.number().required('Required'),
    firstValue: Yup.number().required('Required'),
    secondValue: Yup.number().required('Required'),
  });

  return (
    <Styled.Container>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={validate}
      >
        <Form>
          <Field
            component={TextField}
            id="entry"
            name="entry"
            type="text"
            variant="outlined"
            label="Entry"
            margin="dense"
          />

          <Field
            component={TextField}
            id="firstValue"
            name="firstValue"
            type="text"
            variant="outlined"
            label="First Value"
          />

          <Field
            component={TextField}
            id="secondValue"
            name="secondValue"
            type="text"
            variant="outlined"
            label="Second Value"
          />
        </Form>
      </Formik>
    </Styled.Container>
  );
};
