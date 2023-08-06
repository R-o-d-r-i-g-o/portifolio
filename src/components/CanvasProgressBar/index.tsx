'use client'

import { Html, useProgress } from '@react-three/drei'
import * as S from './styles'

const CanvasProgressBar = () => {
  const { progress } = useProgress()

  return (
    <Html>
      <S.TextLoad>{progress.toFixed(0)}%</S.TextLoad>
    </Html>
  )
}

export default CanvasProgressBar
