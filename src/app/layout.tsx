"use client"

import * as S from '../@styles';
import React, { Fragment } from 'react';
import { neonCursor } from 'threejs-toys';
import Navbar from '../components/Navbar';
import { Inter } from 'next/font/google';

const baseFont = Inter({ subsets: ['latin'] });

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

  React.useEffect(() => {
    neonCursor({
      el: document.getElementById('app'),
      shaderPoints: 16,
      curvePoints: 80,
      curveLerp: 0.5,
      radius1: 5,
      radius2: 30,
      velocityTreshold: 10,
      sleepRadiusX: 100,
      sleepRadiusY: 100,
      sleepTimeCoefX: 0.0025,
      sleepTimeCoefY: 0.0025
    })
  }, [])

  return (
    <Fragment>
      <S.GlobalStyle />
      <S.Html>
        <S.Body className={baseFont.className}>
          <Navbar />
          {children}
        </S.Body>
      </S.Html>
    </Fragment>
  )
}

export default RootLayout;
