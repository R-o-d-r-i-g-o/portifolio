import React from 'react';
import styled from 'styled-components';

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

const Card = styled.div`
  height: 300px;
  max-width: 225px;
  box-shadow: ${({ theme }) => `20px 20px 50px rgba(${theme.bodyColorRGB}, .2)`};
  border-radius: 15px;
  background: ${({ theme }) => `rgba(${theme.textColor}, .5)`};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: ${({ theme }) => `1px solid rgba(${theme.bodyColorRGB}, .5)`};
  border-left: ${({ theme }) => `1px solid rgba(${theme.bodyColorRGB}, .5)`};
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
`;

const Marker = styled.h2`
  position: absolute;
  margin-top: -60px;
  height: 146px;
  font-size: 8em;
  color: ${({ theme }) => `rgba(${theme.bodyColorRGB}, .05)`} ;
  pointer-events: none;
`;

const Title = styled.h3`
  font-size: 1.3em;
  color: ${({ theme }) => theme.textColor};
  z-index: 1;
`;

const BodyText = styled.p`
  font-size: .8em;
  color: ${({ theme }) => theme.textColor};
  font-weight: 300;   
  margin: 10px;
`;

const HiperLink = styled.button`
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  margin-top: 15px;
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.bodyColor};
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  border: none;
  cursor: pointer;
  box-shadow: ${({ theme }) => `0 5px 15px rgba(${theme.bodyColorRGB}, .2)`};
`;

export { Container, Card, Content, Marker, Title, BodyText, HiperLink };

