import { FormGroup } from '@mui/material';
import styled from 'styled-components';

export const FormGroupStyled = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-width:50.6rem;
  width:60%;
  height: 40%;
  max-height: 80rem;
  background: #fff;
  text-align: center;
  margin: 12.8rem auto;
  margin-top: 8rem;
  border-radius: 2.0rem;
  padding:0 2% 4rem 2%;

  > h1{
    padding: 3rem 0 2rem 0 ;
    font-weight:bold ;
    text-transform:uppercase ;
    font-size: 2.4rem;
  }
`;

export const TextFieldStyled = styled.input`
   display: block;
  margin: 0.5rem auto;
  padding: 2rem 3.2rem 2rem 1.6rem;
  border-radius: 0.5rem;
  border: 0.2rem solid #01011a;
  outline: none;
  width: 70%;
  background: transparent;
  color: #01011a;
  font-size: 1.6rem;
  transition: all 300ms ease-in-out;

&:focus{
  border-color:#06069c;
}
`;
