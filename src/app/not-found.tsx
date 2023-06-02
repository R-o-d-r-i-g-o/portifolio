"use client"

import React from "react";
import Lottie from 'react-lottie';
import styled from "styled-components";
import notFound from '../../public/animations/not-found.json';

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: notFound,
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 93vh;
`;

const Animation = styled(Lottie as any).attrs({
  options: defaultOptions,
})`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Works = () => (
  <Container>
    <Animation />;
  </Container>
);


export default Works;