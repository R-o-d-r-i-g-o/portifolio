"use client"

import styled, { keyframes } from 'styled-components';
import { IoLanguage } from 'react-icons/io5';
import { BiSun, BiMoon, BiMenu } from "react-icons/bi";
import Link from "next/link";

export const Header = styled.header`
  position: fixed;
  z-index: 2;
  background: ${({ theme }) => `rgba(${theme.textColorRGB}, .25)`};
  backdrop-filter: blur(10px);
  height: 56px;
  width: 100%;
`;

export const Nav = styled.nav`
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  height: 100%;
  display: flex;
  padding: 0 10px;
  width: 775px;

  @media screen and (max-width: 775px) {
    justify-content: end;
    width: 100%
  }
`;

export const Container = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 12px;
  background: ${({ theme }) => theme.palette.primary.main};
  display: flex;
`;

export const ButtonSet = styled.div`
  display: flex;
  width: fit-content;
  gap: 10px;
`;

export const ImageView = styled(Container)`
  color: ${({ theme }) => theme.textColor};

  @media screen and (min-width: 775px) {
    display: none;
  }
`;

export const Lang = styled(IoLanguage)`
  margin: auto;
  color: ${({ theme }) => theme.bodyColor};
  height: 20px;
  width: 20px;
`;

export const Dark = styled(BiMoon)`
  margin: auto;
  color: ${({ theme }) => theme.bodyColor};
  height: 20px;
  width: 20px;
`;

export const Ligth = styled(BiSun)`
  margin: auto;
  color: ${({ theme }) => theme.bodyColor};
  height: 20px;
  width: 20px;
`;

export const Menu = styled(BiMenu)`
  margin: auto;
  color: ${({ theme }) => theme.bodyColor};
  height: 20px;
  width: 20px;
`;

export const Options = styled.div`
  display: flex;
  width: 288px;
  gap: 20px;
  width: fit-content;

  @media screen and (max-width: 775px) {
    display: none;
  }
`;

export const Item = styled(Link)`
  cursor: pointer;
  line-height: 18px;
  text-decoration: none;
  color: ${({theme}) => theme.textColor};
  font-weight: 600;
  font-size: 16px;

  display: inline-block;
  padding-bottom: .25rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.palette.primary.main};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: .6;
    top: -300px;
  }
  to {
    opacity: 1;
    top: 0px;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    top: 0px;
  }
  100% {
    opacity: .6;
    top: -300px;
  }
`;

export const MobileMenuOptions = styled(Header)<{ appear: boolean | undefined }>`
  box-shadow: ${({ theme }) => `2px 4px 4px rgba(${theme.bodyColorRGB}, .4)`};
  animation: ${({ appear }) => appear ? fadeIn : fadeOut} 1.2s ease-in-out forwards;
  z-index: 1;
  left: 14px;
  padding: 80px 20px 20px;
  gap: 10px;
  border-radius: 0 0 20px 20px;
  height: fit-content;
  width: fit-content; 
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 775px) {
    display: none;
  }
`;