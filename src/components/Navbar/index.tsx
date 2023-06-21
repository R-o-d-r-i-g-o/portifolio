"use client"

import React, { useState, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { darkTheme } from "../themes/darkTheme";
import { defaultTheme } from "../themes/defaultTheme";
import menuOpitons from './data.json'
import * as S from './styles';

const Navbar = () => {
  const [, setTheme] = useLocalStorage("theme", defaultTheme);
  const [changeTheme, setChangeTheme] = useState<boolean>(false);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

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
            <S.AnimatedView>
              <S.Container onClick={() => setChangeTheme((e) => !e)}>
                {changeTheme ? <S.Ligth/> : <S.Dark />}
              </S.Container>
            </S.AnimatedView>
            <S.AnimatedView>
              <S.ImageView onClick={() => setShowMobileNav((e) => !e)}>
                <S.Menu />
              </S.ImageView>
            </S.AnimatedView>
          </S.ButtonSet>
        </S.Nav>
      </S.Header>
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
    </>
  );
};

export default Navbar;