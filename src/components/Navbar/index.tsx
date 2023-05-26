"use client"

import Link from "next/link";
import menuOpitons from './data.json'
import * as S from './styles';
import { Tilt } from 'react-tilt';
import React, { useState } from "react";

const options = {
  reverse:        false,  // reverse the tilt direction
	max:            80,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
}

const Navbar = () => {
  const [navActive, setNavActive] = useState<boolean>(false);
  const [themeLight, setThemeLight] = useState<boolean>(false);

  return (
    <S.Header>
      <S.NavList>


        <S.List >
          {menuOpitons.map((menu) => (
            <S.Item onClick={() => setNavActive(false)} key={menu.text}>
              <Link href={menu.href}>
                {menu.text}
              </Link>
            </S.Item>
          ))}
        </S.List>

<S.IconsCont>
      <Tilt options={options}>


        <S.Container onClick={() => setThemeLight(!themeLight)}>
          {themeLight ? <S.Ligth/> : <S.Dark />}
        </S.Container>
      </Tilt>

      <Tilt options={options}>
        <S.ImageView>
          <S.Menu />
        </S.ImageView>
      </Tilt>
</S.IconsCont>



      </S.NavList>
    </S.Header>
  );
};

export default Navbar;