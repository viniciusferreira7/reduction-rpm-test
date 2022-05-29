import styled, { css } from 'styled-components';

const stylesSuccess = (success) => css`
  color:${success ? 'green' : 'red'};
  font-size:1.6rem;
  `;

const stylesNumber = (number) => css`
  color:${number && 'black'};
  font-size:${number && '1.2rem'} ;
;`;

const stylesIcon = (icon) => css`
  color:${icon && '#0c0959'};
;`;

export const Container = styled.p`
${({ success, number, icon }) => css`
  text-align: center;
  font-family: 'Roboto';
  font-weight: 800;
  margin: 1rem 0;
  ${stylesSuccess(success)}
  ${stylesNumber(number)}
  ${stylesIcon(icon)}`}`;
