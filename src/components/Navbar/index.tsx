"use client"

import React, { useState } from "react";
import menuOpitons from './data.json'
import * as S from './styles';

const Navbar = () => {
  const [changeTheme, setChangeTheme] = useState<boolean>(false);

  return (
    <S.Header>
      <S.Nav>
        <S.Options >
          {menuOpitons.map(({text, href}) => (
            <S.Item key={text} href={href}>
              {text}
            </S.Item>
          ))}
        </S.Options>
        <S.ButtonSet>
          <S.AnimatedView>
            <S.Container onClick={() => setChangeTheme(!changeTheme)}>
              {changeTheme ? <S.Ligth/> : <S.Dark />}
            </S.Container>
          </S.AnimatedView>
          <S.AnimatedView>
            <S.ImageView>
              <S.Menu />
            </S.ImageView>
          </S.AnimatedView>
        </S.ButtonSet>
      </S.Nav>
    </S.Header>
  );
};

export default Navbar;