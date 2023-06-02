"use client"

import React from "react";
import Lottie from 'react-lottie';
import styled from "styled-components";
import notFound from '../../public/animations/not-found.json';

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: notFound,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Animation = styled(Lottie as any).attrs({
  options: defaultOptions,
})`
  display: block;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
`;

const Works = () => <Animation />;

export default Works;