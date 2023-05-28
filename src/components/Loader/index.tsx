"use client"

import { Html, useProgress } from "@react-three/drei";
import * as S from './styles';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <S.CanvasLoad></S.CanvasLoad>
      <S.TextLoad>
        {progress.toFixed(0)}%
      </S.TextLoad>
    </Html>
  );
};

export default Loader;
