"use client"

import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;

  @media screen and (max-width: 775px) {
    flex-direction: column;
    margin: 0;
  }
`;

const LeftDiv = styled.div`
  padding-top: 45px;
  flex: 1.5;

  @media screen and (max-width: 775px) {
    padding: 0;
  }
`;

const RigthDiv = styled.div`
  align-self: center;
  flex: 1;
`;

const Title = styled.h2`
  font-size: 35px;
  line-height: 40px;
  font-weight: 900;
`;

const SubTitle = styled.h3`
  font-size: 16px;
  line-height: 40px;
`;

const Description = styled.p`
  text-align: justify;
  text-indent: 25px;
  margin-top: 35px;
`;

export { Container, LeftDiv, RigthDiv, Title, SubTitle, Description };