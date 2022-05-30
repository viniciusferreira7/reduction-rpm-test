import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
 margin:0;
 padding:0;
 box-sizing:border-box ;
 font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
}

html{
  height: 100%;
  font-size: 62.5%;
}

body {
  background: linear-gradient(
      30deg,
      #0318a1 20%,
      #020c52 50%,
      #000524 90%
    );
    padding: 0 1%;
  }`;
