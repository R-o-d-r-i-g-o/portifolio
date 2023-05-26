"use client";

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: none;
    padding: 0;
    margin: 0;
  }
`;

const Html = styled.html.attrs({ lang: 'en' })``;

const Body = styled.body``;

export { GlobalStyle, Html, Body };
