import React, { Suspense, useRef } from 'react'
import { Canvas, MeshProps } from '@react-three/fiber'
import TextParagrath from '../TextParagrath'
import { WebGLRenderer } from 'three'
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Image
} from '@react-three/drei'
import * as S from './styles'

import CanvasLoader from '../CanvasProgressBar'
import useTranslation from 'next-translate/useTranslation'

const Cube: React.FC<MeshProps> = () => {
  const rendererRef = useRef<WebGLRenderer | null>(null)
  const { t } = useTranslation('common')

  return (
    <S.Container>
      <S.LeftDiv>
        <TextParagrath
          title="Rodrigo M. Ribeiro"
          subTitle={t('page.occupation')}
          bodyText={t('page.main-description')}
        />
      </S.LeftDiv>
      <S.RigthDiv>
        <S.AnimationView>
          <Canvas
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={rendererRef as any}
            camera={{ position: [5, 5, 5], fov: 12 }}
          >
            <Suspense fallback={<CanvasLoader />}>
              <>
                <ambientLight intensity={0.5} />
                <directionalLight position={[3, 2, 1]} />
                <mesh>
                  <boxGeometry />
                  <meshStandardMaterial>
                    <RenderTexture attach="map" sourceFile={undefined}>
                      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                      <Image
                        url="https://avatars.githubusercontent.com/u/89111957?v=4"
                        scale={[5, 5]}
                      />
                    </RenderTexture>
                  </meshStandardMaterial>
                </mesh>
                <OrbitControls enableZoom={false} autoRotate />
              </>
            </Suspense>
          </Canvas>
        </S.AnimationView>
      </S.RigthDiv>
    </S.Container>
  )
}

export default Cube
