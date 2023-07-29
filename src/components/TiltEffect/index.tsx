"use client"

import React from 'react';
import * as S from './styles';

type Props = {
  children: React.ReactElement;
  shouldStopOnResize?: boolean;
}

const TiltEffect = ({ children, shouldStopOnResize = false }: Props) => {
  const _PHONE_WIDTH = 768;

  const [windowWidth, setWindowWidth] = React.useState(0);

  React.useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const removeEffect = (): boolean =>
    shouldStopOnResize && windowWidth < _PHONE_WIDTH;

  return removeEffect() ? children : (
    <S.AnimatedView>
      { children }
    </S.AnimatedView>
  );
}

export default TiltEffect;