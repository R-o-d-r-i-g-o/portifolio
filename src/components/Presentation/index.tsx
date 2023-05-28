import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PerspectiveCamera, RenderTexture, Image } from "@react-three/drei";

const Cube = () => {

  return (

    <div style={{ height: 250, width: 250 }}>
    <Canvas camera={{ position: [5, 5, 5], fov: 12 }}>
      <Suspense fallback={null}>
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






    
  );
};

export default Cube;