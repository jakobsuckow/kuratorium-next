import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Prophet";
    src: url("/assets/fonts/Prophet-Regular.otf") format("opentype");
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }
  
  ::-webkit-scrollbar {
    width: 0px;
    /* Remove scrollbar space */
    background: transparent;
    /* Optional: just make scrollbar invisible */
    -ms-overflow-style: none;
  }
  
  body {
    font-family: "Prophet";
    height: 100%;
    width: 100vw;
    background-color: #c8c7c5;
    font-size: 1.2rem;
    overflow: -moz-scrollbars-none;
    overflow-x: hidden;
  }
  
  body::-webkit-scrollbar {
    width: 0 !important;
  }
  
  body -webkit-scrollbar {
    width: 0 !important;
  }
  
  ::selection {
    background-color: #4366cc;
  }
  `;

export default GlobalStyle;
