'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import * as S from './styles'

type Props = {
  lottie: object
}

const Works = ({ lottie }: Props) => {
  const searchParams = useSearchParams()
  const lang = searchParams.get('lang')

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie
  }

  // eslint-disable-next-line no-console
  console.log(lang)

  return (
    <S.Container>
      <S.Animation options={defaultOptions} />
    </S.Container>
  )
}

export default Works
