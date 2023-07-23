"use client"

import React from 'react';
import * as S from './styles';

type Props = {
  children: React.ReactElement;
  shouldStopOnResize?: boolean;
}

const TiltEffect = ({ children, shouldStopOnResize = false }: Props) => {
  const _PHONE_WIDTH = 775;

  const removeEffect = (): boolean => 
    shouldStopOnResize && window.innerWidth < _PHONE_WIDTH;

  return removeEffect() ? children : (
    <S.AnimatedView>
      { children }
    </S.AnimatedView>
  );
}

export default TiltEffect;