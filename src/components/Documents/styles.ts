import React from "react";
import { HiperLink } from '../CardGrid/styles';
import { BiLink, BiDownload } from "react-icons/bi";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 45px;
  display: flex;
  gap: 10px;
  justify-content: center;

  @media screen and (max-width: 450px) {
    gap: 15px;
    flex-direction: column;
  }
`;

const Button = styled(HiperLink)`
  justify-content: space-around;
  margin: auto;
  width: 180px;
  padding: 15px 10px;
  box-shadow: ${({ theme }) => `20px 20px 50px rgba(${theme.bodyColorRGB}, .2)`};
  display: flex;
`;

const LinkImg = styled(BiLink)`
  color: ${({ theme }) => theme.bodyColor};
  height: 15px;
  width: 15px;
`;

const DownloadImg = styled(BiDownload)`
  color: ${({ theme }) => theme.bodyColor};
  height: 15px;
  width: 15px;
`;

export { Container, Button, LinkImg, DownloadImg };
