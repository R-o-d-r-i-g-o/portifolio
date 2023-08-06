import React from 'react'
import * as S from './styles'

type Props = {
  src: string
}

const Video = ({ src }: Props) => (
  <S.Video key={src}>
    <source src={src} type="video/mp4" />
  </S.Video>
)

export default Video
