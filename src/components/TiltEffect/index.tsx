"use client"

import React from 'react';
import * as S from './styles';

type TiltEffectProps = {
  children: React.ReactElement;
  shouldStopOnResize?: boolean;
}

const TiltEffect = ({ children, shouldStopOnResize = false }: TiltEffectProps) => {

  const _PHONE_WIDTH = 775;
  const [windowWidth, setWindowWidth] = React.useState<number>(0);

  const removeEffect = (): boolean => 
    shouldStopOnResize && windowWidth < _PHONE_WIDTH;

  window.addEventListener(
    'resize', 
    () => setWindowWidth(window.innerWidth)
  );

  return removeEffect() ? children : (
    <S.AnimatedView>
      { children }
    </S.AnimatedView>
  );
}

export default TiltEffect;