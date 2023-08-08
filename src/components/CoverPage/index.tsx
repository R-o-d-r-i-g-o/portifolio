'use client'

import React from 'react'
import * as S from './styles'

type Props = {
  lottie: object
}

const Works = ({ lottie }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie
  }

  return (
    <S.Container>
      <S.Animation options={defaultOptions} />
    </S.Container>
  )
}

export default Works
