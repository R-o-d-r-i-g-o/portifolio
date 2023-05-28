"use client"

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import technologies from './data.json';
import CanvasLoader from "../Loader";
import * as S from './styles';

import {
  Decal,
  Float,
  OrbitControls,
  useTexture,
} from "@react-three/drei";

const Ball = ({ imgUrl }: { imgUrl: string }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={5}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, .01]} />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial color="#fff8eb" />
        <Decal
          position={[0, 0, .5]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const Tech = () => (
  <S.Container>
    {technologies.map((icon, index) => (
      <S.Item key={index}>
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false}/>
            <Ball imgUrl={icon} />
          </Suspense>
        </Canvas>
      </S.Item>
    ))}
  </S.Container>
);

export default Tech;
