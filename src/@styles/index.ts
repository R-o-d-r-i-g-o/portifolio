"use client";

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: none;
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: white;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #232943;
    top: 0;
    border: 3px solid white;
    border-radius: 50px;
  }
`;

const Html = styled.html.attrs({ lang: 'en' })``;

const Body = styled.body``;

export { GlobalStyle, Html, Body };
