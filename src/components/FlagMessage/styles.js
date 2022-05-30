import styled, { css } from 'styled-components';

const stylesSuccess = (success) => css`
  color:${success ? '#04780d' : '#ab0c17'};
  font-size:1.6rem;
  margin: 1rem 0 0.5rem 0;
  `;

const stylesNumber = (number) => css`
  color:${number && '#fff'};
  font-size:${number && '1.6rem'} ;
  ${number && 'text-decoration: underline;'}
;`;

const stylesIcon = (icon) => css`
  color:${icon && '#fff'};
  ${icon && 'margin: 2rem 0 0 0;'}
;`;

const stylesCreators = (creators) => css`
  color:${creators && '#fff'};
  ${creators && 'padding: 2rem 0 2rem 0;'}
;`;

export const Container = styled.p`
${({ success, number, icon, creators }) => css`
  text-align: center;
  font-family: 'Roboto';
  font-weight: 800;
  margin: 0 0 1.4rem 0;
  ${stylesSuccess(success)}
  ${stylesNumber(number)}
  ${stylesIcon(icon)}
  ${stylesCreators(creators)}`}`;
