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

const Button = styled.button`
  justify-content: space-around;
  width: 180px;
  padding: 15px 10px;
  color: ${({ theme }) => theme.textColor}; 
  box-shadow: ${({ theme }) => `20px 20px 50px rgba(${theme.bodyColorRGB}, .2)`};
  background: ${({ theme }) => `rgba(${theme.bodyColorRGB}, .2)`};
  border-top: ${({ theme }) => `1px solid rgba(${theme.bodyColorRGB}, .5)`};
  border-left: ${({ theme }) => `1px solid rgba(${theme.bodyColorRGB}, .5)`};
  border-radius: 30px;
  display: flex;
`;

const LinkImg = styled(BiLink)`
  color: ${({ theme }) => theme.textColor};
  height: 15px;
  width: 15px;
`;


export { Container, Button, LinkImg };
