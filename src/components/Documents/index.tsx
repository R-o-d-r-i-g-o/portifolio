import React from 'react';
import TiltEffect from '../TiltEffect';
import * as S from './styles';

const RedirectToCv = () => (
  <S.Container>
    <TiltEffect shouldStopOnResize>
      <S.Button onClick={() => {
        window.open(
          'https://docs.google.com/document/d/11yKvY3V6maZMbsJCR1IJDDWkXWfjDTM2-YJDrTqPoq0/edit?usp=sharing',
          '_blank'
          );
      }}>
        Access CV
        <S.LinkImg />
      </S.Button>
    </TiltEffect>
  </S.Container>
);

export default RedirectToCv;