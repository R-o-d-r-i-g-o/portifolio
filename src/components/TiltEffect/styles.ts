"use client"

import { Tilt } from 'react-tilt';
import styled from "styled-components";

const _TILT_OPTIONS = Object.freeze({
  reverse:     false,
  max:         80,
  perspective: 1000,
  scale:       1,
  speed:       1000,
  transition:  true,
  axis:        null,
  reset:       true,
});

const AnimatedView = styled(Tilt).attrs({
  options: _TILT_OPTIONS
})``;

export { AnimatedView }; 