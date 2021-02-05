import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
 }
 body {
   -webkit-font-smoothins: antialiased;
 }
 body, input, button {
   font: 1rem Roboto, sans-serif;
 }

 button {
   cursor: pointer;
 }
`;
