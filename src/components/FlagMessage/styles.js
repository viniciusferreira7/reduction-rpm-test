import styled, { css } from 'styled-components';

const stylesSuccess = (success) => css`
  color:${success ? 'green' : 'red'};
  font-size:1.2rem;
  font-weight:bold ;
  `;

const stylesNumber = (number) => css`
  color:${number && 'black'};
  font-size:${number && '1.2rem'} ;
  font-weight:${number && 'bold'} ;
;`;

const stylesIcon = (icon) => css`
  color:${icon && '#0c0959'};
;`;

export const Container = styled.p`
${({ success, number, icon }) => css`
  text-align: center;
  ${stylesSuccess(success)}
  ${stylesNumber(number)}
  ${stylesIcon(icon)}`}`;
