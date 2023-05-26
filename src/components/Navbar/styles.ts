import styled from 'styled-components';
import { BiSun, BiMoon, BiMenu } from "react-icons/bi";

export const Header = styled.header`
  position: fixed;
  height: 56px;
  width: 100%;

  @media screen and (max-width: 750px) {
    top: initial;
    bottom: 0;
  }
`;

export const NavList = styled.nav`
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  width: 775px;

  @media screen and (max-width: 750px) {
    width: 100%
  }
`;

export const Container = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 12px;
  background: #fbd38d;
  display: flex;
`;

export const IconsCont = styled.div`
  display: flex;
  width: fit-content;
  gap: 10px
`;

export const ImageView = styled(Container)`

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Dark = styled(BiMoon)`
  margin: auto;
  height: 20px;
  width: 20px;
`;

export const Ligth = styled(BiSun)`
  margin: auto;
  height: 20px;
  width: 20px;
`;

export const Menu = styled(BiMenu)`
  margin: auto;
  height: 20px;
  width: 20px;
`;

export const List = styled.div`
  display: flex;
  width: 288px;
  gap: 20px;
  width: fit-content;
`;

export const Item = styled.div`

  a {
    cursor: pointer;
    line-height: 18px;
    text-decoration: none;
    color: #1a202c;
    font-weight: 600;
    font-size: 16px;

    display: inline-block;
    padding-bottom: .25rem;
    position: relative;
  }

  a::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fbd38d;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;