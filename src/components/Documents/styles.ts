import React from "react";
import { HiperLink } from '../CardGrid/styles';
import { BiLink } from "react-icons/bi";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 500px) {
    margin-top: 30px;
  }
`;

const Button = styled(HiperLink)`
  justify-content: space-around;
  width: 180px;
  padding: 15px 10px;
  box-shadow: ${({ theme }) => `20px 20px 50px rgba(${theme.bodyColorRGB}, .2)`};
  border: ${({ theme }) => `2px solid ${theme.textColor}`};
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.bodyColor};
  display: flex;
`;

const LinkImg = styled(BiLink)`
  color: ${({ theme }) => theme.bodyColor};
  height: 15px;
  width: 15px;
`;


export { Container, Button, LinkImg };
