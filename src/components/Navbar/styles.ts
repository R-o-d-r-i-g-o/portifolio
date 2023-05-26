import styled from 'styled-components';
import { Tilt } from 'react-tilt';
import Link from "next/link";
import { COLORS, TILT_OPTIONS } from '@/utils/consts';
import { BiSun, BiMoon, BiMenu } from "react-icons/bi";

export const Header = styled.header`
  position: fixed;
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

  @media screen and (max-width: 750px) {
    justify-content: end;
    width: 100%
  }
`;

export const AnimatedView = styled(Tilt).attrs({
  options: TILT_OPTIONS
})``;

export const Container = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 12px;
  background: ${COLORS.primary};
  display: flex;
`;

export const ButtonSet = styled.div`
  display: flex;
  width: fit-content;
  gap: 10px;
`;

export const ImageView = styled(Container)`

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

// TODO: refatorar essa parte
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

export const Options = styled.div`
  display: flex;
  width: 288px;
  gap: 20px;
  width: fit-content;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const Item = styled(Link)`
  cursor: pointer;
  line-height: 18px;
  text-decoration: none;
  color: #1a202c;
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
    background: ${COLORS.primary};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;