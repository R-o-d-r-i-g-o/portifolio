'use client'

import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  font-size: 35px;
  line-height: 40px;
  font-weight: 900;
`

const SubTitle = styled.h3<{ isNormalText: boolean }>`
  font-size: 16px;
  line-height: 40px;
  margin-top: ${({ isNormalText }) => (isNormalText ? '35px' : '0')};
`

const BodyText = styled.p<{ isNormalText: boolean }>`
  text-align: justify;
  text-indent: 25px;
  margin-top: ${({ isNormalText }) => (isNormalText ? '0' : '35px')};
`

export { Title, SubTitle, BodyText }
