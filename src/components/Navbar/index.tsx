"use client"

import React, { useState, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { darkTheme } from "../themes/darkTheme";
import TiltEffect from '../TiltEffect';
import { defaultTheme } from "../themes/defaultTheme";
import menuOpitons from './data.json'
import * as S from './styles';

const Navbar = () => {
  const [, setTheme] = useLocalStorage("theme", defaultTheme);
  const [changeTheme, setChangeTheme] = useState<boolean>(false);
  const [showMobileNav, setShowMobileNav] = useState<boolean | undefined>();

  useEffect(() => {
    setTheme(changeTheme ? darkTheme : defaultTheme);
  }, [changeTheme]);

  return (
    <>
      <S.Header>
        <S.Nav>
          <S.Options >
            {menuOpitons.map(({label, ref}) => (
              <S.Item 
                key={label} 
                href={ref as any}
                onClick={() => setShowMobileNav(false)}
              >
                {label}
              </S.Item>
            ))}
          </S.Options>
          <S.ButtonSet>
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
      {!!showMobileNav && (
        <S.MobileMenuOptions appear={showMobileNav}>
          {menuOpitons.map(({label, ref}) => (
            <S.Item 
              key={label} 
              href={ref as any}
              onClick={() => setShowMobileNav(false)}
            >
              {label}
            </S.Item>
          ))}
        </S.MobileMenuOptions>
      )}
    </>
  );
};

export default Navbar;