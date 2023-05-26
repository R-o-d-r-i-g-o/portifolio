//"use client"

import * as S from '../@styles';
import React from 'react';
import Navbar from '@/components/Navbar';
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

const RootLayout = ({ children }: RootLayoutProps) => (
  <>
    <S.GlobalStyle />
    <S.Html>
      <S.Body className={baseFont.className}>
        <Navbar />
        {children}
      </S.Body>
    </S.Html>
  </>
);

export default RootLayout;
