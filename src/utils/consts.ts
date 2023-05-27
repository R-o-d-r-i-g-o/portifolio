import React from "react";

export const TILT_OPTIONS = {
  reverse:     false,  // reverse the tilt direction
  max:         80,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale:       1,    // 2 = 200%, 1.5 = 150%, etc..
  speed:       1000,   // Speed of the enter/exit transition
  transition:  true,   // Set a transition on enter/exit.
  axis:        null,   // What axis should be disabled. Can be X or Y.
  reset:       true,    // If the tilt effect has to be reset on exit.
}

export const COLORS = {
  primary: '#A0A0A0',
  secondary: '#00FF00',
  tertiary: '#0000FF',
};