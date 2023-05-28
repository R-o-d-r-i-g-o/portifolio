import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PerspectiveCamera, RenderTexture, Image } from "@react-three/drei";
import * as S from './styles';

import CanvasLoader from "../Loader";

const Cube = () => (
  <S.Container>
    <S.LeftDiv>
      <S.Title> Rodrigo M. Ribeiro </S.Title>
      <S.SubTitle> Software Engineer | Cloud Associate </S.SubTitle>
      <S.Description>
        With expertise in coding and cloud computing, conquer
        complex challenges, optimize performance, and deliver
        cutting-edge solutions tailored for the cloud era.
      </S.Description>
    </S.LeftDiv>
    <S.RigthDiv>
    <div style={{ height: 250, width: 250, margin: '0 auto' }}>
      <Canvas camera={{ position: [5, 5, 5], fov: 12 }}>
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
    </div>
    </S.RigthDiv>
  </S.Container>
);

export default Cube;