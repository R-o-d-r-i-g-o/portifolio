'use client'

import React from 'react'
import { Space } from 'antd'
import { useLocalStorage } from 'usehooks-ts'
import { defaultTheme } from '@/themes/defaultTheme'
import * as S from './styles'

const Qrcode = ({ link }: { link: string }) => {
  const [theme] = useLocalStorage('theme', defaultTheme)
  const isDarkTheme = theme.bodyColor === '#121212'

  return !link.length ? null : (
    <S.Container>
      <Space direction="vertical" align="center">
        <S.HoverableQRCode
          value={link}
          color={isDarkTheme ? '#ffffff' : '#121212'}
        />
      </Space>
    </S.Container>
  )
}

export default Qrcode
