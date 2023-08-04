"use client"

import React from 'react';
import { GlobalStyle, Main } from '../themes/GlobalStyle'
import Navbar from '@/components/Navbar';
import { useLocalStorage } from "usehooks-ts";
import { defaultTheme } from "../themes/defaultTheme";
import BackgroundVideo from '../components/BackgroundVideo';
import StyledComponentsRegistry from '../lib/registry';
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { Quicksand } from 'next/font/google';
import { _TOAST_OPTIONS } from '../utils/consts';
import { appWithTranslation } from 'next-i18next'

import 'react-toastify/dist/ReactToastify.css';

const baseFont = Quicksand({ subsets: ['latin'] });

const metadata = {
  icon: {
    rel: 'icon',
    sizes: '32x32',
    url: '/favicon.ico',
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

const RootLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  const [theme] = useLocalStorage("theme", defaultTheme);
  const isDarkTheme = theme.bodyColor === '#121212';

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme} >
      <GlobalStyle />
        <html lang="en">
          <body className={baseFont.className}>
            <BackgroundVideo src={theme.bodyVideo}/>
            <Navbar />
            <Main>
              {children}
              <ToastContainer
                { ..._TOAST_OPTIONS }
                theme={isDarkTheme ? 'dark': 'light'}
              />
            </Main>
          </body>
        </html>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default appWithTranslation(RootLayout as any);
export { metadata };
