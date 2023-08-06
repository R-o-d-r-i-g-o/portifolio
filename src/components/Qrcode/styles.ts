'use client'

import React from 'react'
import { QRCode } from 'antd'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  margin: 20px auto;
`

const HoverableQRCode = styled(QRCode)`
  transition: transform 0.3s ease-in-out;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};

  &:hover {
    transform: scale(1.2);
  }
`

export { Container, HoverableQRCode }
