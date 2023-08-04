import React from 'react';
import TiltEffect from '../TiltEffect';
import useTranslation from 'next-translate/useTranslation'
import * as S from './styles';

const RedirectToCv = () => (
  <S.Container>
    <TiltEffect shouldStopOnResize>
      <S.Button onClick={() => window.open('https://docs.google.com/document/d/1BJcVojivh4nQiWMw0idupu0zBLcSF0SyzSXdYaIg4Io/edit?usp=sharing')}>
        {useTranslation('common').t('page.access-cv')}
        <S.LinkImg />
      </S.Button>
    </TiltEffect>
  </S.Container>
);

export default RedirectToCv;