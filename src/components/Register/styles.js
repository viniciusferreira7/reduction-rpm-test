import { FormGroup } from '@mui/material';
import styled from 'styled-components';

export const FormGroupStyled = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-width:60.6rem;
  width:80%;
  height: 60%;
  max-height: 80rem;
  background: #090b14;
  text-align: center;
  margin: 12.8rem auto;
  margin-top: 8rem;
  border-radius: 2.0rem;
  padding:3rem 2% 0 2%;

  > h1{
    padding: 3rem 0 2rem 0 ;
    font-weight:bold ;
    text-transform:uppercase ;
    font-size: 2.4rem;
    color: #fff;
  }
`;

export const TextFieldStyled = styled.input`
   display: block;
  margin: 0.5rem auto;
  padding: 2rem 3.2rem 2rem 1.6rem;
  border-radius: 0.5rem;
  border: 0.2rem solid #fff;
  outline: none;
  width: 70%;
  background: transparent;
  color: #fff;
  font-size: 1.6rem;
  transition: all 300ms ease-in-out;

&:focus{
  border-color:#06069c;
}
`;
