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
  color: white;
  margin: auto;
  width: 180px;
  padding: 15px 10px;
  display: flex;
  
  box-shadow: 20px 20px 50px rgba(0, 0, 0, .5);
  border-top: 1px solid rgba(255, 255, 255, .5);
  border-left: 1px solid rgba(255, 255, 255, .5);
  background: rgba(0, 0, 0, .5);
  backdrop-filter: bulr(5px);
`;

const LinkImg = styled(BiLink)`
  color: white;
  height: 15px;
  width: 15px;
`;

const DownloadImg = styled(BiDownload)`
  color: white;
  height: 15px;
  width: 15px;
`;

export { Container, Button, LinkImg, DownloadImg };
