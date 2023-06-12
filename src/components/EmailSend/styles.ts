import React from "react";
import { Button } from '../Documents/styles'
import { Container as Cont } from '../Documents/styles';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { GoMail } from 'react-icons/go'
import styled from "styled-components";

const Container = styled.div`
  margin: 30px 0 60px;
`;

const FormContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; 
  align-items: center;
`;

const Form = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => `rgba(${theme.bodyColorRGB}, .2)`};
  color: ${({ theme }) => theme.textColor};
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  max-width: 100%;
  min-width: 100%;
  border-radius: 5px;
  background: ${({ theme }) => `rgba(${theme.bodyColorRGB}, .2)`};
  color: ${({ theme }) => theme.textColor};
`;

const SendEmail = styled(Button)`
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Line = styled.hr`
  box-shadow: ${({ theme }) => `20px 20px 50px rgba(${theme.textColor}, .3)`};
  color: ${({ theme }) => theme.textColor};
`;

const MediaSet = styled(Cont)`
  margin-top: 10px;
  flex-direction: row;
`;

const Medias = styled(Button)`
  width: fit-content;
  border-radius: 8px;
  padding: 8px;
`;

const LinkinImg = styled(FaLinkedin)`
  color: ${({ theme }) => theme.bodyColor};
  height: 25px;
  width: 25px;
`;

const GithubImg = styled(FaGithubSquare)`
  color: ${({ theme }) => theme.bodyColor};
  height: 25px;
  width: 25px;
`;

const GMailImg = styled(GoMail)`
  color: ${({ theme }) => theme.bodyColor};
  height: 25px;
  width: 25px;
`;

export {
  Container,
  FormContainer,
  Form,
  Input,
  TextArea,
  SendEmail,
  Line,
  MediaSet,
  Medias,
  LinkinImg, 
  GithubImg, 
  GMailImg
};
