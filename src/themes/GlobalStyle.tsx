"use client"

import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: none;
    padding: 0;
    margin: 0;
  }

  body {
    background: ${({ theme }) => theme.bodyColor};
    color: ${({ theme }) => theme.textColor};

    .ant-modal-mask, .ant-modal-wrap, .ant-modal-root {
      background-color: rgba(${({theme}) => theme.bodyColorRGB}, 0.45) !important;
    }
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme}) => theme.bodyColor};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.textColor};
    border: 3px solid ${({theme}) => theme.bodyColor};
    border-radius: 50px;
    top: 0;
  }
`;

const Main = styled.main`
  padding-top: 56px;
  margin: 0 auto;
  width: 750px;

  @media screen and (max-width: 775px) {
    padding: 56px 20px 0;
    width: 100%;
  }
`;

export { GlobalStyle, Main };