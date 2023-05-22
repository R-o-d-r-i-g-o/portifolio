import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    /* outline: none; */
    padding: 0;
    margin: 0;
    /* cursor: none; */
  }

  html, body {
    overflow-x: hidden;
    overflow-y: scroll;
    width: 100vw;
    height: auto;
  }
`;

const Html = styled.html.attrs({ lang: 'en' })``;

const Body = styled.body.attrs({ id: 'app' })`
  canvas {
    position: absolute;
    height: auto;
    width: auto;
    z-index: -1;
    top: 0;
  }
`;

export { GlobalStyle, Html, Body };
