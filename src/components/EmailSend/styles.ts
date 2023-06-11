import React from "react";
import { Button } from '../Documents/styles'
import { Container as Cont } from '../Documents/styles';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { GoMail } from 'react-icons/go'
import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
`;

const Line = styled.hr`
  box-shadow: 20px 20px 50px rgba(255, 255, 255, .3);
  color: ${({ theme }) => theme.textColor};
  
`;

const MediaSet = styled(Cont)`
  margin-top: 10px;
`;

const Medias = styled(Button)`
  width: fit-content;
  border-radius: 8px;
  padding: 8px;
`;

const LinkinImg = styled(FaLinkedin)`
  color: white;
  height: 25px;
  width: 25px;
`;

const GithubImg = styled(FaGithubSquare)`
  color: white;
  height: 25px;
  width: 25px;
`;

const GMailImg = styled(GoMail)`
  color: white;
  height: 25px;
  width: 25px;
`;

export { Container, Line, MediaSet, Medias, LinkinImg, GithubImg, GMailImg };
