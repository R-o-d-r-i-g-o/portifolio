"use client"

import React from 'react';
import { GlobalStyle, Main } from '../components/themes/GlobalStyle'
import Navbar from '@/components/Navbar';
import { useLocalStorage } from "usehooks-ts";
import { defaultTheme } from "../components/themes/defaultTheme";
import StyledComponentsRegistry from '../lib/registry';
import { ThemeProvider } from "styled-components";
import { Quicksand } from 'next/font/google';

const baseFont = Quicksand({ subsets: ['latin'] });

export const metadata = {
  icon: {
    rel: 'icon',
    sizes: '32x32',
    url: '../../public/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  title: {
    default: 'Rodrigo',
    template: 'Rodrigo - %s',
  },
  keywords: [
    'Rodrigo designs',
    'Rodrigo developer',
    'Rodrigo portfolio',
    'Rodrigo Marques Ribeiro',
    'Rodrigo M. Ribeiro'
  ],
  description: 'Welcome to my portfolio site! I\'m Rodrigo, a passionate and skilled developer specializing '
             + 'manly in front-ent development. On this site, you\'ll find a showcase of my work, including '
             + 'various projects and contributions I have made throughout my career.',
}

type RootLayoutProps = {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const [theme] = useLocalStorage("theme", defaultTheme);
  
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme} >
      <GlobalStyle />
        <html lang="en">
          <body className={baseFont.className}>
              <video
                autoPlay
                muted
                loop
                style={{
                  position: 'fixed',
                  width: '100%',
                  height: '100%',
                  left: '50%',
                  top: '50%',
                  objectFit: 'cover',
                  transform: 'translate(-50%, -50%)',
                  zIndex: '-1'
                }}
              >
                <source 
                  src={'/videos/background-video.mp4'}
                  type='video/mp4'
                />
              </video>
              <Navbar />
              <Main>
                {children}
              </Main>
          </body>
        </html>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default RootLayout;
