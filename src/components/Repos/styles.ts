'use client'

import React from 'react';
import { Modal } from 'antd';
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin: 20px auto;
  gap: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  width: fit-content;
  height: auto;
  max-height: 120px;
  overflow: hidden;
  border-radius: 10px;
`;

const CoverImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

const Card = styled.div`
  max-width: 225px;
  box-shadow: ${({ theme }) => `20px 20px 50px rgba(${theme.bodyColorRGB}, .2)`};
  border-radius: 15px;
  background: ${({ theme }) => `rgba(${theme.textColorRGB}, .2)`};
  overflow: hidden;
  border-top: ${({ theme }) => `1px solid rgba(${theme.bodyColorRGB}, .5)`};
  border-left: ${({ theme }) => `1px solid rgba(${theme.bodyColorRGB}, .5)`};
  backdrop-filter: bulr(5px);
  min-width: 80%;
  margin: 0 auto;
  display: block;
  padding: 20px;
  height: fit-content;

  @media screen and (max-width: 766px) {
    max-width: 290px;
  }

  @media screen and (max-width: 500px) {
    max-width: 350px;
  }
`;

const Title = styled.h3`
  font-size: 1.2em;
  color: ${({ theme }) => theme.textColor};
  z-index: 1;
  margin: 5px 0 2px;
`;

const BodyText = styled.p`
  font-size: .8em;
  color: ${({ theme }) => theme.textColor};
  font-weight: 300;
`;

const ButtonContaier = styled.div`
  display: flex;
  gap: 5px;
`;

const HiperLink = styled.button`
  position: relative;
  padding: 8px 20px;
  margin-top: 15px;
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.bodyColor};
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  border: none;
  cursor: pointer;
  box-shadow: ${({ theme }) => `0 5px 15px rgba(${theme.bodyColorRGB}, .2)`};
`;

const ModalItem = styled(Modal)`
  .ant-modal-content, .ant-modal-title {
    background: ${({ theme }) => theme.bodyColor} !important;
    color: ${({ theme }) => theme.textColor} !important;

    svg {
      color: ${({ theme }) => theme.textColor} !important;
    }
  }
  .ant-btn-default {
    background: transparent !important;
    border-color: ${({ theme }) => theme.textColor} !important;
    color: ${({ theme }) => theme.textColor} !important;
    &:hover {
      border-color: ${({ theme }) => theme.textColor} !important;
      color: ${({ theme }) => theme.textColor} !important;
    }
  }
  .ant-btn-primary {
    background: ${({ theme }) => theme.textColor} !important;
    &:hover {
      background: ${({ theme }) => theme.textColor} !important;
    }
  }
`;

const ExternalLink = styled(HiperLink)`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.textColor};
`;

export {
  Container,
  ImageContainer,
  CoverImage,
  Card,
  Title,
  BodyText,
  ButtonContaier,
  ModalItem,
  HiperLink,
  ExternalLink
};