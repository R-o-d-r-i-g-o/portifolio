'use client'

import React, { Suspense } from 'react'
import { defaultTheme } from '../../themes/defaultTheme'
import { useLocalStorage } from 'usehooks-ts'
import { Canvas } from '@react-three/fiber'
import TextParagrath from '../TextParagrath'
import technologies from './data.json'
import CanvasLoader from '../CanvasProgressBar'
import useTranslation from 'next-translate/useTranslation'
import * as S from './styles'

import { Decal, Float, OrbitControls, useTexture } from '@react-three/drei'

const Ball = ({ imgUrl }: { imgUrl: string }) => {
  const [decal] = useTexture([imgUrl])
  const [theme] = useLocalStorage('theme', defaultTheme)

  return (
    <Float speed={5} key={theme.bodyColor}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0.01]} />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial color={theme.bodyColor} />
        <Decal position={[0, 0, 0.5]} scale={[-1, 1, 1]} map={decal} />
      </mesh>
    </Float>
  )
}

const Tech = () => (
  <>
    <TextParagrath
      isBodyText
      subTitle={useTranslation('common').t('page.skill-title')}
    />
    <S.Container>
      {technologies.map((icon, index) => (
        <S.Item key={index}>
          <Canvas>
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls enableZoom={false} />
              <Ball imgUrl={icon} />
            </Suspense>
          </Canvas>
        </S.Item>
      ))}
    </S.Container>
  </>
)

export default Tech
