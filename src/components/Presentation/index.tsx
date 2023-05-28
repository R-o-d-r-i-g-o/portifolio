import React from "react";
import { PerspectiveCamera, RenderTexture, Image } from "@react-three/drei";

const Cube = () => {

  return (
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
  );
};

export default Cube;