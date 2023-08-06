'use client'

import { DefaultTheme } from 'styled-components'

export const darkTheme: DefaultTheme = {
  name: 'dark',
  bodyVideo: '/videos/background-video-black.mp4',
  bodyColorRGB: '255, 255, 255',
  bodyColor: '#121212',
  textColorRGB: '0, 0, 0',
  textColor: '#a5a5a5',
  palette: {
    common: {
      black: '#121212',
      white: '#ffffff'
    },
    primary: {
      main: '#A0A0A0',
      contrastText: '#2c2c2c'
    },
    secondary: {
      main: '#d899e2',
      contrastText: '#2c2c2c'
    }
  }
}
