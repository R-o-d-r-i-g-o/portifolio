'use client'

import React from 'react'
import * as S from './styles'

type TextParagrathProps = {
  isBodyText?: boolean
  title?: string
  subTitle?: string
  bodyText?: string
}

const TextParagrath = ({
  isBodyText: isPageFirstOne = false,
  title,
  subTitle,
  bodyText
}: TextParagrathProps) => (
  <>
    {title && <S.Title>{title}</S.Title>}
    {subTitle && (
      <S.SubTitle isNormalText={isPageFirstOne}>{subTitle}</S.SubTitle>
    )}
    {bodyText && (
      <S.BodyText isNormalText={isPageFirstOne}>{bodyText}</S.BodyText>
    )}
  </>
)

export default TextParagrath
