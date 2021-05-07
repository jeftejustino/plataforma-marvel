import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import axiformaBold from '@base/assets/fonts/Axiforma-Bold.ttf';
import axiformaLight from '@base/assets/fonts/Axiforma-Light.ttf';
import axiformaMedium from '@base/assets/fonts/Axiforma-Medium.ttf';
import axiformaThin from '@base/assets/fonts/Axiforma-Thin.ttf';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  
  @font-face {
    font-family: 'Axiforma';
    src: url(${axiformaBold}) format('truetype');
    font-weight: bold;
    font-style: bold;
  }
  @font-face {
    font-family: 'Axiforma';
    src: url(${axiformaMedium}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Axiforma';
    src: url(${axiformaLight}) format('truetype');
    font-weight: 300;
    font-style: 300;
  }
  @font-face {
    font-family: 'Axiforma';
    src: url(${axiformaThin}) format('truetype');
    font-weight: 200;
    font-style: 200;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus{
    outline: 0;
  }
  html, body, #root{
    height: 100%;
  }
  body{
    -webkit-font-smoothing: antialiased;
  }
  body, input, button{
    font: 14px 'Axiforma', sans-serif;
    font-weight: normal;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button{
    cursor: pointer;
    border: 0;
    background: none;
  }
  .text-center{
    text-align: center !important;
  }
  .text-left{
    text-align: left !important;
  }
  .text-right{
    text-align: right !important;
  }
`;
