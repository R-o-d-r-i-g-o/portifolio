"use client"

import React from 'react';
import { GlobalStyle, Main } from '../components/themes/GlobalStyle'
import Navbar from '@/components/Navbar';
import { useLocalStorage } from "usehooks-ts";
import { defaultTheme } from "../components/themes/defaultTheme";
import { ThemeProvider } from "styled-components";
import { Quicksand } from 'next/font/google';

const baseFont = Quicksand({ subsets: ['latin'] });

export const metadata = {
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <html lang="en">
        <body className={baseFont.className}>
          <Navbar />
          <Main>
            {children}
          </Main>
        </body>
      </html>
    </ThemeProvider>
  );
}

export default RootLayout;
