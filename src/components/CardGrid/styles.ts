import React from 'react';

import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
  z-index: 1;
`;

// const Appear = keyframes`
//   from {
//     margin-top: 100px;
//   }
//   to {
//     opacity: ;
//   }
// `;

const Card = styled.div`
  height: 300px;
  max-width: 225px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, .5);
  border-radius: 15px;
  background: rgba(0, 0, 0, .5);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, .5);
  border-left: 1px solid rgba(255, 255, 255, .5);
  backdrop-filter: bulr(5px);

  @media screen and (max-width: 766px) {
    max-width: 290px;
  }

  @media screen and (max-width: 500px) {
    max-width: 500px;
  }
`;

const Content = styled.div`
  padding: 20px;
  text-align: center;
  transition: .5s;

  h2 {
    position: absolute;
    top: -20px;
    right: 30px;
    font-size: 8em;
    color: rgba(255, 255, 255, .05);
    pointer-events: none;
  }

`;

const Title = styled.h3`
  font-size: 1.3em;
  color: white;
  z-index: 1;
`;

const BodyText = styled.p`
  font-size: .8em;
  color: white;
  font-weight: 300;   
  margin: 10px;
`;

const HiperLink = styled.button`
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  margin-top: 15px;
  background: white;
  color: black;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  border: none;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .2);
`;

export { Container, Card, Content, Title, BodyText, HiperLink };

