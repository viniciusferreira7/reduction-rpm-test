import styled, { css } from 'styled-components';

const stylesSuccess = (success) => css`
  color:${success ? '#115207' : '#ab0c17'};
  font-size:1.6rem;
  `;

const stylesNumber = (number) => css`
  color:${number && '#01011a'};
  font-size:${number && '1.6rem'} ;
  ${number && 'text-decoration: underline;'}
;`;

const stylesIcon = (icon) => css`
  color:${icon && '#01011a'};
;`;

export const Container = styled.p`
${({ success, number, icon }) => css`
  text-align: center;
  font-family: 'Roboto';
  font-weight: 800;
  margin: 0 0 1.4rem 0;
  ${stylesSuccess(success)}
  ${stylesNumber(number)}
  ${stylesIcon(icon)}`}`;
