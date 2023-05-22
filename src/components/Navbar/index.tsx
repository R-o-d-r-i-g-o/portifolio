import Link from "next/link";
import * as S from './styles';
import React, { useState } from "react";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState<boolean>(false);

  return (
    <S.Header>
      <S.Nav>
        <Link href={"/"}>
          <h1>CodeWithMarish</h1>
        </Link>
        <S.Menu onClick={() => setNavActive(!navActive)}>
          <S.Clink />
          <S.Clink />
          <S.Clink />
        </S.Menu>
        <S.List active={navActive} >
          {MENU_LIST.map((menu) => (
            <S.Item onClick={() => setNavActive(false)} key={menu.text}>
              <Link href={menu.href}>
                {menu.text}
              </Link>
            </S.Item>
          ))}
        </S.List>
      </S.Nav>
      {/* <S.Separator /> */}
    </S.Header>
  );
};

export default Navbar;