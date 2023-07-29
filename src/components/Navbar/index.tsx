"use client"

import React, { useState, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { darkTheme } from "../../themes/darkTheme";
import TiltEffect from '../TiltEffect';
import { defaultTheme } from "../../themes/defaultTheme";
import menuOpitons from '../../mocks/menu-options.json';
import { toast } from 'react-toastify';
import * as S from './styles';

const Navbar = () => {
  const [, setTheme] = useLocalStorage("theme", defaultTheme);
  const [changeTheme, setChangeTheme] = useState<boolean>(false);
  const [changeLang, setChangeLang] = useState<string>('en')
  const [showMobileNav, setShowMobileNav] = useState<boolean | undefined>(undefined);

  const bringOptions = () => (
    <>
        {menuOpitons.map(({label, ref}) => (
        <S.Item 
          key={label} 
          href={ref as any}
          onClick={() => setShowMobileNav(undefined)}
        >
          {label}
        </S.Item>
      ))}
    </>
  );

  const showMessage = () => {
    toast("jfksdklfjkk")
  };

  useEffect(() => {
    setTheme(changeTheme ? darkTheme : defaultTheme);
  }, [changeTheme]);

  return (
    <>
      <S.Header>
        <S.Nav>
          <S.Options >
            {bringOptions()}
          </S.Options>
          <S.ButtonSet>
            <TiltEffect shouldStopOnResize>
              <S.Container onClick={showMessage}>
                <S.Lang/>
              </S.Container>
            </TiltEffect>
            <TiltEffect shouldStopOnResize>
              <S.Container onClick={() => setChangeTheme((e) => !e)}>
                {changeTheme ? <S.Ligth/> : <S.Dark />}
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
  );
};

export default Navbar;
