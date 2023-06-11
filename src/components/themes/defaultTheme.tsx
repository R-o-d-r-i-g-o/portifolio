"use client"

import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  name: "default",
  bodyVideo: "/videos/background-video-white.mp4",
  bodyColorRGB: '0, 0, 0',
  bodyColor: "#ffffff",
  textColorRGB: '255, 255, 255',
  textColor: "#000000",
  palette: {
    common: {
      black: "#121212",
      white: "#ffffff",
    },
    primary: {
      main: "#3b82f6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#d946ef",
      contrastText: "#ffffff",
    },
  },
};