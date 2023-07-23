import React, { Suspense, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TextParagrath from '../TextParagrath';
import { PerspectiveCamera, RenderTexture, Image } from "@react-three/drei";
import * as S from './styles';

import CanvasLoader from "../CanvasProgressBar";

const Cube = () => {
  const rendererRef = useRef();

  return (
    <S.Container>
      <S.LeftDiv>
        <TextParagrath 
          title='Rodrigo M. Ribeiro'
          subTitle='Software Engineer | Cloud Associate'
          bodyText={
            'Experienced full-stack software engineer proficient in diverse ' + 
            'technologies and frameworks. Passionate about solving complex '  + 
            'problems and delivering high-quality applications. Continuously' +
            ' learning and adapting to industry advancements.'
          }
        />
      </S.LeftDiv>
      <S.RigthDiv>
        <S.AnimationView>
          <Canvas camera={{ position: [5, 5, 5], fov: 12 }} ref={rendererRef as any}>
            <Suspense fallback={<CanvasLoader />}>
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
            </Suspense>
          </Canvas>
        </S.AnimationView>
      </S.RigthDiv>
    </S.Container>
  );  
}

export default Cube;