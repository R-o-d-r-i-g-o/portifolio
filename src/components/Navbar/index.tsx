'use client'

import React, { useState, useEffect } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { darkTheme } from '../../themes/darkTheme'
import TiltEffect from '../TiltEffect'
import { defaultTheme } from '../../themes/defaultTheme'
import menuOpitons from '../../mocks/menu-options.json'
import languages from '../../mocks/languages.json'
import useTranslation from 'next-translate/useTranslation'
import { toast } from 'react-toastify'
import * as S from './styles'

import { useRouter, usePathname } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname() || '/'
  const { t } = useTranslation('common')

  const [, setTheme] = useLocalStorage('theme', defaultTheme)
  const [changeTheme, setChangeTheme] = useState<boolean>(false)
  const [changeLang, setChangeLang] = useState(languages[0])
  const [showMobileNav, setShowMobileNav] = useState<boolean | undefined>(
    undefined
  )

  const bringOptions = () => (
    <>
      {menuOpitons.map(({ label, ref }) => (
        <S.Item
          key={label}
          href={`${ref}?lang=${changeLang.option}` as any}
          onClick={() => setShowMobileNav(undefined)}
        >
          {t(label)}
        </S.Item>
      ))}
    </>
  )

  const showMessage = () => {
    const currentIndex = languages.findIndex(
      (item) => item.option === changeLang.option
    )
    const nextIndex = (currentIndex + 1) % languages.length

    setChangeLang(languages[nextIndex])
  }

  useEffect(() => {
    setTheme(changeTheme ? darkTheme : defaultTheme)
  }, [changeTheme])

  useEffect(() => {
    toast(`${t(changeLang.label)}`)
    router.replace(
      (!!changeLang ? `${pathname}?lang=${changeLang.option}` : pathname) as any
    )
  }, [changeLang])

  return (
    <>
      <S.Header>
        <S.Nav>
          <S.Options>{bringOptions()}</S.Options>
          <S.ButtonSet>
            <TiltEffect shouldStopOnResize>
              <S.Container onClick={showMessage}>
                <S.Lang />
              </S.Container>
            </TiltEffect>
            <TiltEffect shouldStopOnResize>
              <S.Container onClick={() => setChangeTheme((e) => !e)}>
                {changeTheme ? <S.Ligth /> : <S.Dark />}
              </S.Container>
            </TiltEffect>
            <TiltEffect shouldStopOnResize>
              <S.ImageView onClick={() => setShowMobileNav((e) => !e)}>
                <S.Menu />
              </S.ImageView>
            </TiltEffect>
          </S.ButtonSet>
        </S.Nav>
      </S.Header>
      {typeof showMobileNav !== 'undefined' && (
        <S.MobileMenuOptions appear={showMobileNav}>
          {bringOptions()}
        </S.MobileMenuOptions>
      )}
    </>
  )
}

export default Navbar
